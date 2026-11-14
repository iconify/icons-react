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

.rx5vjdb4t {
  d: path("M12 7V4.5q0-1.5 1-2");
}

.rzy02ublf {
  d: path("M12 5q2.5-2.5 5.5-1.5Q15.5 6 12 5");
}

.tgtv42nco {
  d: path("M8.5 14a3.5 7 0 1 0 7 0a3.5 7 0 1 0-7 0");
}

.w-gbqsb7e {
  d: path("M2.5 14a9.5 7 0 1 0 19 0a9.5 7 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="w-gbqsb7e"/><path class="tgtv42nco"/><path class="rx5vjdb4t"/><path class="rzy02ublf"/></g>`,
		"fallback": "uix:seasonal-aisle",
	});
}

export default Component;
