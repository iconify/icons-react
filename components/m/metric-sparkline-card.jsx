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
		"content": `<style>.gqph8sbcu {
  d: path("m6 16l2.5-2.5L11 15l2.5-3.25l2.5 1.5L18 11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nqk5dqj5d {
  fill: currentColor;
  d: path("M7.25 7.75h4.5A1.25 1.25 0 0 1 13 9a1.25 1.25 0 0 1-1.25 1.25h-4.5A1.25 1.25 0 0 1 6 9a1.25 1.25 0 0 1 1.25-1.25");
}

.wx95c7tlb {
  d: path("M7.75 4.5h8.5a5.25 5.25 0 0 1 5.25 5.25v4.5a5.25 5.25 0 0 1-5.25 5.25h-8.5a5.25 5.25 0 0 1-5.25-5.25v-4.5A5.25 5.25 0 0 1 7.75 4.5");
}
</style><g class="hntgybcog"><path class="wx95c7tlb"/><path class="nqk5dqj5d"/><path class="gqph8sbcu"/></g>`,
		"fallback": "uix:metric-sparkline-card",
	});
}

export default Component;
