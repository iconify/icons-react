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
		"content": `<style>.em0pxi22k {
  d: path("M10.75 11.25L18.25 5c.5-.5 1.25-.5 2 .25c.5.5.25 1.25-.25 2l-7.5 6.25Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y5sxu_l7f {
  d: path("m10.5 11l-4.25 3.75c-2.25 1.75-2.5 4-1.25 5.5l7.75-6.5Z");
}
</style><g class="hntgybcog"><path class="em0pxi22k"/><path class="y5sxu_l7f"/></g>`,
		"fallback": "uix:scalpel",
	});
}

export default Component;
