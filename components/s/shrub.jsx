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
		"content": `<style>.crvp5sghg {
  d: path("M3 19c-1-2.5-.5-5.5 2-6.5c-.5-3.5 2.5-6 5.5-5C12 5 16 5 17.5 8c2.5.5 4 3 3 5.5c1.5 2 1 4.5 0 5.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ov7e4bc4z {
  d: path("M7.5 15.5q1-2.5 3.5-3m2.5 3q2.5-.5 3.5-3");
}
</style><g class="hntgybcog"><path class="crvp5sghg"/><path class="ov7e4bc4z"/></g>`,
		"fallback": "uix:shrub",
	});
}

export default Component;
