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

.j92ud8bwa {
  d: path("M5.75 7.25L3 10l2.75 2.75M18 2.5za3 3 0 0 1 3 3V12a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5.5a3 3 0 0 1 3-3m0 3h.01M18 8.75h.01M18 12h.01");
}

.vp9egfbng {
  d: path("M11 21.5v-8A3.5 3.5 0 0 0 7.5 10H3");
}
</style><g class="hntgybcog"><path class="vp9egfbng"/><path class="j92ud8bwa"/></g>`,
		"fallback": "uix:turn-left-at-lights",
	});
}

export default Component;
