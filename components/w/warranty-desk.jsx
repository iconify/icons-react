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
		"content": `<style>.bv2aa6byf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11h19M4 11v10.5h8.7m7.3-9.8V11M4 18.5h7.7M7.75 3h2.5A1.75 1.75 0 0 1 12 4.75v4.5A1.75 1.75 0 0 1 10.25 11h-2.5A1.75 1.75 0 0 1 6 9.25v-4.5A1.75 1.75 0 0 1 7.75 3m0 3h2.5M18 14l3.5 1.25V18c0 2-1.5 3.25-3.5 4c-2-.75-3.5-2-3.5-4v-2.75Z");
}
</style><path class="bv2aa6byf"/>`,
		"fallback": "uix:warranty-desk",
	});
}

export default Component;
