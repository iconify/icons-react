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

.s4q0i-h9e {
  d: path("M6.5 9.75a4 4 0 1 1 5.5 0c1 1.75 4 2.5 6.5 1.75l2.75-2c.5 2.5.25 5.5-1.25 8c-1.5 2.25-4.5 3.25-8 3.25c-4.5 0-8-1.75-8-5.25C4 13 5.25 11 6.5 9.75");
}

.vtfc8x6cg {
  d: path("M4.375 6.75za.785.785 0 0 0 .084 1.355l.056.028a.769.769 0 0 0 1.11-.758l-.003-.028a.804.804 0 0 0-1.247-.597M10 6h.01M10 14.5c2 2 5 2 7 0");
}
</style><g class="hntgybcog"><path class="s4q0i-h9e"/><path class="vtfc8x6cg"/></g>`,
		"fallback": "uix:squeaky-toy",
	});
}

export default Component;
