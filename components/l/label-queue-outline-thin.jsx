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

.ljz_vjbfq {
  d: path("M7 6.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ob3bf9b2i {
  d: path("M5 3h10l3.5 3.5L15 10H5Z");
}

.phj3jm8ef {
  d: path("M7 17.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.r4bxr4bnm {
  d: path("M5 14h10l3.5 3.5L15 21H5Z");
}
</style><g class="hntgybcog"><path class="ob3bf9b2i"/><path class="r4bxr4bnm"/><path class="ljz_vjbfq"/><path class="phj3jm8ef"/></g>`,
		"fallback": "iconmind:label-queue-outline-thin",
	});
}

export default Component;
