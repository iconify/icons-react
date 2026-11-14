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

.q1yf41bdr {
  d: path("M10 2.5h4A3.5 3.5 0 0 1 17.5 6v12a3.5 3.5 0 0 1-3.5 3.5h-4A3.5 3.5 0 0 1 6.5 18V6A3.5 3.5 0 0 1 10 2.5");
}

.tnbzorb6y {
  d: path("M10 6.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0h3.5M10 13c0-1 1-1.5 2-1.5s2 .5 2 1.5c0 1.5-2 1.5-2 3m0 2.25h.01");
}
</style><g class="hntgybcog"><path class="q1yf41bdr"/><path class="tnbzorb6y"/></g>`,
		"fallback": "uix:leave-request",
	});
}

export default Component;
