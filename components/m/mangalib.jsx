import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.liawmobsl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 18.5v-9a4 4 0 0 1 4-4h9m24 24v9a4 4 0 0 1-4 4h-9m-16-8.023V13.5l10.5 21l10.5-20.968V34.5");
}
</style><path class="liawmobsl"/>`,
		"fallback": "arcticons:mangalib",
	});
}

export default Component;
