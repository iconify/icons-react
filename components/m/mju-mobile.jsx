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
		"content": `<style>.gsaq77b8d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.538 9.002v14.232c0 4.028 3.222 7.25 6.98 7.25s6.982-3.222 6.982-7.25V9.002m-22.107.001c3.048 0 5.502-.113 5.502 2.936v21.374c0 3.05-2.821 5.685-5.869 5.685M6.5 30.216V9.002l8.77 21.482l7.197-17.625");
}
</style><path class="gsaq77b8d"/>`,
		"fallback": "arcticons:mju-mobile",
	});
}

export default Component;
