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
		"content": `<style>.izj36mb4t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.77 28.667v-10.01l8.321 10.01v-10.01");
}

.wew5m6bfr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.434 7.298S27.715 40.34 15.692 40.703c-13.99-.165-13.869-33.285 2.17-33.405C31.852 7.504 28.39 40.22 37.4 40.1c1.604.024 3.063-1.077 5.101-5.029");
}
</style><path class="wew5m6bfr"/><path class="izj36mb4t"/>`,
		"fallback": "arcticons:native-a",
	});
}

export default Component;
