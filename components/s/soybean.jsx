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
		"content": `<style>.dcgw77bis {
  cx: 12px;
  cy: 12px;
  r: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oi0ahrvvo {
  cx: 16.42px;
  cy: 7.58px;
  r: 1.5px;
}

.rmojggbbz {
  cx: 7.58px;
  cy: 16.42px;
  r: 1.5px;
}

.v1rjrc2hr {
  d: path("m3.39 18.49l-.11-2.01q-.12-2 1.29-3.41l8.5-8.5q1.41-1.41 3.41-1.29l2.01.11q2 .12 2.12 2.12l.11 2.01q.12 2-1.29 3.41l-8.5 8.5q-1.41 1.41-3.41 1.29l-2.01-.11q-2-.12-2.12-2.12");
}
</style><g class="hntgybcog"><path class="v1rjrc2hr"/><circle class="rmojggbbz"/><circle class="dcgw77bis"/><circle class="oi0ahrvvo"/></g>`,
		"fallback": "iconoven:soybean",
	});
}

export default Component;
