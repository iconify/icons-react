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
		"content": `<style>.cd-g8yb2w {
  d: path("M3.25 14C4.5 11 7.75 9 12 9s7.5 2 8.75 5a1.75 1 0 0 1-3.5 0a1.75 1 0 0 1-3.5 0a1.75 1 0 0 1-3.5 0a1.75 1 0 0 1-3.5 0a1.75 1 0 0 1-3.5 0M9 12.25l1.5-.75m4.5.75l-1.5-.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mb5cyflme {
  d: path("M3.25 14a1.75 1 0 0 0 3.5 0a1.75 1 0 0 0 3.5 0a1.75 1 0 0 0 3.5 0a1.75 1 0 0 0 3.5 0a1.75 1 0 0 0 3.5 0h.5l-1.4 3.9a2 2 0 0 1-1.9 1.35H6.05a2 2 0 0 1-1.9-1.35L2.75 14Z");
}
</style><g class="hntgybcog"><path class="cd-g8yb2w"/><path class="mb5cyflme"/></g>`,
		"fallback": "iconoven:pie-dish",
	});
}

export default Component;
