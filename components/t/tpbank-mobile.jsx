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
		"content": `<style>.gk1eb1rby {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.35 39.61l-3.836-27.054M5.58 10.563a2.333 2.333 0 0 1 1.65-2.857M25.65 39.61a2.333 2.333 0 0 1-3.3 0q0 0 0 0M40.77 7.706a2.333 2.333 0 0 1 1.65 2.857M25.65 39.61l16.77-29.046m-1.65-2.858H7.23m-1.65 2.857L22.35 39.61M7.23 7.706L32.859 18.44m9.561-7.877L20.802 28.689");
}
</style><path class="gk1eb1rby"/>`,
		"fallback": "arcticons:tpbank-mobile",
	});
}

export default Component;
