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
		"content": `<style>.cvdx9j9uz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 12h14.5A1.75 1.75 0 0 1 21 13.75v6a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 19.75v-6A1.75 1.75 0 0 1 4.75 12M13 8.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3-1v2M8 12V6.5M8 9c0-2-1.5-3.5-3.5-3.5C4.5 7.5 6 9 8 9m0-1.5c0-2.25 1.5-3.75 3.5-3.75c0 2-1.5 3.75-3.5 3.75M3 12L2 9.5M21 12l1-2.5");
}
</style><path class="cvdx9j9uz"/>`,
		"fallback": "uix:severance-pay",
	});
}

export default Component;
