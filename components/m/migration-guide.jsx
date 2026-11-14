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

.pyq9fdbkk {
  d: path("m15.5 17.75l2.5-2.5l2.5 2.5");
}

.tvfm0yblh {
  d: path("M4 2.5h3L9.5 5v6A1.5 1.5 0 0 1 8 12.5H4A1.5 1.5 0 0 1 2.5 11V4A1.5 1.5 0 0 1 4 2.5m12 0h3L21.5 5v6a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 16 2.5M6 15.25V19a2.5 2.5 0 0 0 2.5 2.5h7A2.5 2.5 0 0 0 18 19v-3.75");
}
</style><g class="hntgybcog"><path class="tvfm0yblh"/><path class="pyq9fdbkk"/></g>`,
		"fallback": "uix:migration-guide",
	});
}

export default Component;
