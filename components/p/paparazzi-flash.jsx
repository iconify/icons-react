import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iealp8bgl {
  d: path("M8.75 15a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}

.tf9qlpb9t {
  d: path("M6.5 8.75h11a3.5 3.5 0 0 1 3.5 3.5v5.25a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-5.25a3.5 3.5 0 0 1 3.5-3.5M12 2.5V6M6 3l2 3m10-3l-2 3");
}
</style><g class="hntgybcog"><path class="tf9qlpb9t"/><path class="iealp8bgl"/></g>`,
		"fallback": "uix:paparazzi-flash",
	});
}

export default Component;
