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
		"content": `<style>.t9w9xcc_m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.889 12.111za2.5 2.5 0 0 1 0 3.535l-4.243 4.243a2.5 2.5 0 0 1-3.535 0a2.5 2.5 0 0 1 0-3.535l4.243-4.243a2.5 2.5 0 0 1 3.535 0M14 10l5-5m-7.25 2.75l5-5m-.5 9.5l5-5");
}
</style><path class="t9w9xcc_m"/>`,
		"fallback": "uix:laser-hair-removal",
	});
}

export default Component;
