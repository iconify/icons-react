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
		"content": `<style>.agb5ekdfj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m35.531 35.117l-7.179-7.18");
}

.bxxb6ndav {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 43.5c3.883 0 14.68-7.263 15.658-19.893v-13.48L24 4.5L8.342 10.127v13.48C8.906 35.517 19.834 43.5 24 43.5");
}

.p9h8wrdan {
  cx: 24px;
  cy: 24.044px;
  r: 5.846px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="bxxb6ndav"/><circle class="p9h8wrdan"/><path class="agb5ekdfj"/>`,
		"fallback": "arcticons:play-integrity-api-checker",
	});
}

export default Component;
