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

.n8_m05bbi {
  d: path("M19.375 8za2.125 2.125 0 0 1 2.125 2.125v3.75A2.125 2.125 0 0 1 19.375 16a2.125 2.125 0 0 1-2.125-2.125v-3.75A2.125 2.125 0 0 1 19.375 8");
}

.s-5urxb6y {
  fill: currentColor;
  d: path("M4.875 8zA2.125 2.125 0 0 1 7 10.125v3.75A2.125 2.125 0 0 1 4.875 16a2.125 2.125 0 0 1-2.125-2.125v-3.75A2.125 2.125 0 0 1 4.875 8m7.25 0za2.125 2.125 0 0 1 2.125 2.125v3.75A2.125 2.125 0 0 1 12.125 16A2.125 2.125 0 0 1 10 13.875v-3.75A2.125 2.125 0 0 1 12.125 8");
}
</style><g class="hntgybcog"><path class="s-5urxb6y"/><path class="n8_m05bbi"/></g>`,
		"fallback": "uix:progress-segments",
	});
}

export default Component;
