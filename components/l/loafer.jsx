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
		"content": `<style>.avs7pybtk {
  d: path("M2.5 17.5v-10l5 2l4-3q6.5 1 9 5.25q1 1.75 1 3.5v2.25Zm0-2.25h19");
}

.bwqn15byx {
  d: path("M10.25 7.5Q13.5 12 17 8.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="avs7pybtk"/><path class="bwqn15byx"/></g>`,
		"fallback": "uix:loafer",
	});
}

export default Component;
