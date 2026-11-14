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
		"content": `<style>.aefj23ssx {
  d: path("m8 10l2 2l2-2");
}

.cgiqhvrpl {
  d: path("M16.5 4.5zA2.5 2.5 0 0 1 19 7v2.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 14 9.5V7a2.5 2.5 0 0 1 2.5-2.5M13 14.75h7m-3.5 0v4.75m-3 0h6m-6 2.25h.01m5.99 0h.01M3 19.5v-11a3.5 3.5 0 0 1 7 0V12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cgiqhvrpl"/><path class="aefj23ssx"/></g>`,
		"fallback": "uix:return-to-work",
	});
}

export default Component;
