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
		"content": `<style>.f6xyxvbxw {
  d: path("M2.5 11C8 11 9 16.5 12 16.5s4-5.5 9.5-5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.we7-rlj1k {
  d: path("M2.5 15.5C8 15.5 9 21 12 21s4-5.5 9.5-5.5M9 7.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="f6xyxvbxw"/><path class="we7-rlj1k"/></g>`,
		"fallback": "uix:relativity",
	});
}

export default Component;
