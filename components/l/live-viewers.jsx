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

.lteaw9e2x {
  d: path("M6.5 12C8 9.5 10 8.25 12 8.25S16 9.5 17.5 12C16 14.5 14 15.75 12 15.75S8 14.5 6.5 12m5.5 0h.01");
}

.wx95c7tlb {
  d: path("M7.75 4.5h8.5a5.25 5.25 0 0 1 5.25 5.25v4.5a5.25 5.25 0 0 1-5.25 5.25h-8.5a5.25 5.25 0 0 1-5.25-5.25v-4.5A5.25 5.25 0 0 1 7.75 4.5");
}
</style><g class="hntgybcog"><path class="wx95c7tlb"/><path class="lteaw9e2x"/></g>`,
		"fallback": "uix:live-viewers",
	});
}

export default Component;
