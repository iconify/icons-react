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
		"content": `<style>.flkb2ebyg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 10.74V9.5c0-2.216 1.784-4 4-4h29c2.216 0 4 1.784 4 4v1.24m0 26.52v1.24c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-1.24m4 1.24l29-29m-29 0l29 29");
}
</style><path class="flkb2ebyg"/>`,
		"fallback": "arcticons:saucenao",
	});
}

export default Component;
