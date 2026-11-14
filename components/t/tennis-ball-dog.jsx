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

.qcjm8eicr {
  d: path("M7.5 6.75c2.75 2.75 2.75 7.75 0 10.5M18 6.75c-2.75 2.75-2.75 7.75 0 10.5m-14.127-.125a10.25 10.25 0 0 1 0-10.25");
}

.xp5qtbycg {
  d: path("M5.25 12a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}
</style><g class="hntgybcog"><path class="xp5qtbycg"/><path class="qcjm8eicr"/></g>`,
		"fallback": "uix:tennis-ball-dog",
	});
}

export default Component;
