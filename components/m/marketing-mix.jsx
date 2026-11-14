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

.pjjbkvb_k {
  d: path("M10.25 5.5v7.75H18a7.75 7.75 0 1 1-7.75-7.75");
}

.z3cyklbip {
  d: path("M13 10.5V2.75a7.75 7.75 0 0 1 7.75 7.75ZM2.5 13.25h7.75m0 0V21");
}
</style><g class="hntgybcog"><path class="pjjbkvb_k"/><path class="z3cyklbip"/></g>`,
		"fallback": "uix:marketing-mix",
	});
}

export default Component;
