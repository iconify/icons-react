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
		"content": `<style>.lr7abfbtx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.319 17.744h-12.25V5.494h-12.5v12.25H5.319v12.5h12.25v12.25h12.5v-12.25h12.25z");
}
</style><path class="lr7abfbtx"/>`,
		"fallback": "arcticons:pharmacy",
	});
}

export default Component;
