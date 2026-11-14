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
		"content": `<style>.vjvm2_mfm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 3h15.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75H4.25A1.75 1.75 0 0 1 2.5 4.75A1.75 1.75 0 0 1 4.25 3M2.5 21h10M9 9.5v8m-3-3l3 3l3-3m6 0V18m0 3h.01");
}
</style><path class="vjvm2_mfm"/>`,
		"fallback": "uix:warning-low-headroom",
	});
}

export default Component;
