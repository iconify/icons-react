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

.l_lolebqr {
  d: path("M8.5 5q-1.5 7 0 14m7-14q1.5 7 0 14M12 12h.01");
}

.z5drqcc4y {
  d: path("M5 6q7-2.5 14 0q2.5 6 0 12q-7 2.5-14 0q-2.5-6 0-12");
}
</style><g class="hntgybcog"><path class="z5drqcc4y"/><path class="l_lolebqr"/></g>`,
		"fallback": "uix:spirits-cask",
	});
}

export default Component;
