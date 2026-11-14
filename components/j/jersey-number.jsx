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
		"content": `<style>.b_razc66x {
  d: path("M8 3L3 6l1.5 4.5l2.5-1V21h10V9.5l2.5 1L21 6l-5-3q-4 3.5-8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oad71bc0a {
  d: path("M9.75 11.75h4.5l-2.75 6");
}
</style><g class="hntgybcog"><path class="b_razc66x"/><path class="oad71bc0a"/></g>`,
		"fallback": "uix:jersey-number",
	});
}

export default Component;
