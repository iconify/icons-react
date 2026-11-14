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
		"content": `<style>.d0768rl-e {
  fill: currentColor;
  d: path("M10 6.5h4A1.5 1.5 0 0 1 15.5 8v8a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8.5 16V8A1.5 1.5 0 0 1 10 6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lfo47pb3c {
  d: path("M6.875 6.5h10.25a4.375 4.375 0 0 1 4.375 4.375v2.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 13.125v-2.25A4.375 4.375 0 0 1 6.875 6.5");
}
</style><g class="hntgybcog"><path class="lfo47pb3c"/><path class="d0768rl-e"/></g>`,
		"fallback": "uix:switch-segmented",
	});
}

export default Component;
