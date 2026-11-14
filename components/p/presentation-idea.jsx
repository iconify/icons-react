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

.j-2b7fsga {
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5v6A3.5 3.5 0 0 1 18 16H6a3.5 3.5 0 0 1-3.5-3.5v-6A3.5 3.5 0 0 1 6 3m1 13l-2 5.5M17 16l2 5.5");
}

.qiw0ivbsm {
  d: path("M10.5 12.5v-1a3 3 0 1 1 3 0v1Z");
}
</style><g class="hntgybcog"><path class="j-2b7fsga"/><path class="qiw0ivbsm"/></g>`,
		"fallback": "uix:presentation-idea",
	});
}

export default Component;
