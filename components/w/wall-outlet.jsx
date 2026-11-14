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
		"content": `<style>.e9gub3b_s {
  d: path("M7.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m6 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.hmqgagsie {
  d: path("M10 3h4a7 7 0 0 1 7 7v4a7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7v-4a7 7 0 0 1 7-7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="hmqgagsie"/><path class="e9gub3b_s"/></g>`,
		"fallback": "uix:wall-outlet",
	});
}

export default Component;
