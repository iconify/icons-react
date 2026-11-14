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
		"content": `<style>.a9eg3qb7s {
  d: path("M4 11.5H2.5v-4l2.5-1l2.25-3.75h5.5L15 6.5l3 1v4h-3m-7 0h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hodmj2bwj {
  d: path("M4 11.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 4.75h6m-1.75-1.75L21 16.25m0 3.5h-6m1.75 1.75L15 19.75");
}
</style><g class="hntgybcog"><path class="a9eg3qb7s"/><path class="hodmj2bwj"/></g>`,
		"fallback": "uix:travel-mode-switch",
	});
}

export default Component;
