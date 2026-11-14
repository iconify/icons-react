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

.slqnc1v7i {
  d: path("M9.75 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M2.5 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0m15 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.z_jh0bcad {
  d: path("M2.5 21.5v-4q0-3 3-3h3l2-8.25m11 15.25v-4q0-3-3-3h-3l-2-8.25");
}
</style><g class="hntgybcog"><path class="slqnc1v7i"/><path class="z_jh0bcad"/></g>`,
		"fallback": "uix:jump-ball",
	});
}

export default Component;
