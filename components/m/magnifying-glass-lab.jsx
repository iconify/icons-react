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

.polw-1gzh {
  d: path("M3.5 10.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0m12 5l5 5");
}

.s7uxcdcgo {
  d: path("m8.379 10.854l2.475-2.475a1.25 1.25 0 0 1 1.767 0a1.25 1.25 0 0 1 0 1.767l-2.475 2.475a1.25 1.25 0 0 1-1.767 0a1.25 1.25 0 0 1 0-1.767");
}
</style><g class="hntgybcog"><path class="polw-1gzh"/><path class="s7uxcdcgo"/></g>`,
		"fallback": "uix:magnifying-glass-lab",
	});
}

export default Component;
