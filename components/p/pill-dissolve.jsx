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
		"content": `<style>.g8rh203rg {
  d: path("M5.5 3v16.5a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V3m-13 2.5h13m-8 3.5h.01m2.99 2.5h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p14wc__vo {
  d: path("m10.227 15.533l2.349-.855a1.75 1.75 0 0 1 2.243 1.046a1.75 1.75 0 0 1-1.046 2.243l-2.349.855a1.75 1.75 0 0 1-2.243-1.046a1.75 1.75 0 0 1 1.046-2.243");
}
</style><g class="hntgybcog"><path class="g8rh203rg"/><path class="p14wc__vo"/></g>`,
		"fallback": "uix:pill-dissolve",
	});
}

export default Component;
