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
		"content": `<style>.itx429s_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 19a8.5 2.5 0 1 0 17 0a8.5 2.5 0 1 0-17 0m8.5-2.5V4m0 6c0-4 3-6 7-6c0 4-3 6-7 6m0 3.5c0-3-2.5-5-6.5-5c0 3.5 2.5 5 6.5 5");
}
</style><path class="itx429s_l"/>`,
		"fallback": "uix:mulch-plant",
	});
}

export default Component;
