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
		"content": `<style>.v2snp_sob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0m1.75 4.25L3 17m15 4v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="v2snp_sob"/>`,
		"fallback": "uix:keyword-rank",
	});
}

export default Component;
