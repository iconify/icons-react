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
		"content": `<style>.lrmgteblx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16.5a9.5 9.5 0 0 1 19 0M3.75 11.75L6 13m6-6v2.5m8.25 2.25L18 13m-6 3.5l3-5.25m-3 5.25h.01");
}
</style><path class="lrmgteblx"/>`,
		"fallback": "uix:speedometer",
	});
}

export default Component;
