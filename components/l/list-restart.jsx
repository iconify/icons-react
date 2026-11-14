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
		"content": `<style>.g6zqrl81p {
  d: path("M14.5 6h7m-7 7h7m-19 7h19M7 5.5A4.5 4.5 0 1 1 2.5 10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w_q86u-ly {
  d: path("M4.75 3.25L7 5.5L4.75 7.75");
}
</style><g class="hntgybcog"><path class="g6zqrl81p"/><path class="w_q86u-ly"/></g>`,
		"fallback": "uix:list-restart",
	});
}

export default Component;
