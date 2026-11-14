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
		"content": `<style>.di4bbsbbm {
  d: path("M16.5 20q1.5-1.5 3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jt72hxlmy {
  d: path("M5.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-3 14c0-4.5 3-7 7-7c1.148 0 2.213.206 3.148.605M14.5 18a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m2.25-1.25h.01m2.49 0h.01");
}
</style><g class="hntgybcog"><path class="jt72hxlmy"/><path class="di4bbsbbm"/></g>`,
		"fallback": "uix:mood-lonely",
	});
}

export default Component;
