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
		"content": `<style>.cy_dxjx6y {
  d: path("m9.5 3l-4 1Q4.25 4.5 4 6L2.5 17h3l1-7v11.5h11V10l1 7h3L20 6q-.25-1.5-1.5-2l-4-1L12 8Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n999ezb8m {
  d: path("M13.5 12za1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 13.5 12");
}
</style><g class="hntgybcog"><path class="cy_dxjx6y"/><path class="n999ezb8m"/></g>`,
		"fallback": "uix:lab-style-smock",
	});
}

export default Component;
