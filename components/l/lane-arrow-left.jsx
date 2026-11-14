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
		"content": `<style>.cpzc2zble {
  d: path("M17 20v-8.5a3 3 0 0 0-3-3H5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q0q_0wtau {
  d: path("M8.75 4.75L5 8.5l3.75 3.75");
}
</style><g class="hntgybcog"><path class="cpzc2zble"/><path class="q0q_0wtau"/></g>`,
		"fallback": "uix:lane-arrow-left",
	});
}

export default Component;
