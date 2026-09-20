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
		"content": `<style>.istxz6bdy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.64 26.147a6.136 6.136 0 0 1 6.137 6.136a6.136 6.136 0 0 1-6.136 6.137m-.001 0l-20.254.173");
}

.onbl4zpbh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.507 15.032a11.25 11.25 0 1 1 17.628 13.65");
}

.rme0s0b6q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.484 18.734a11.591 11.591 0 1 1 8.197 19.787m-8.295.072a9.895 9.895 0 0 1 0-19.79");
}
</style><path class="onbl4zpbh"/><path class="rme0s0b6q"/><path class="istxz6bdy"/>`,
		"fallback": "arcticons:oneplus-weather",
	});
}

export default Component;
