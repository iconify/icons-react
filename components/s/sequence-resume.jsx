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

.kr71oacge {
  d: path("M20 12.5a8 8 0 1 1-8-8");
}

.m5eafwbmb {
  d: path("m10 2.5l2 2l-2 2m2.305 3.967l1.206.768a1.5 1.5 0 0 1 0 2.53l-1.206.768A1.5 1.5 0 0 1 10 13.267v-1.534a1.5 1.5 0 0 1 2.305-1.266");
}
</style><g class="hntgybcog"><path class="kr71oacge"/><path class="m5eafwbmb"/></g>`,
		"fallback": "uix:sequence-resume",
	});
}

export default Component;
