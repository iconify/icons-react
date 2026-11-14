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

.ojk58ub1b {
  d: path("M7 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.vs9q79l6d {
  d: path("M9 6.5h11A1.5 1.5 0 0 1 21.5 8v1a1.5 1.5 0 0 1-1.5 1.5h-5.75A5.5 5.5 0 1 1 9 6.5");
}
</style><g class="hntgybcog"><path class="vs9q79l6d"/><path class="ojk58ub1b"/></g>`,
		"fallback": "uix:referee-whistle",
	});
}

export default Component;
