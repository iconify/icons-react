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
		"content": `<style>.xr_gi0bcl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.125 3.5h1.75A2.625 2.625 0 0 1 15.5 6.125v2.75a2.625 2.625 0 0 1-2.625 2.625h-1.75A2.625 2.625 0 0 1 8.5 8.875v-2.75A2.625 2.625 0 0 1 11.125 3.5M6 11.5h12v4H6Zm-1 9h14");
}
</style><path class="xr_gi0bcl"/>`,
		"fallback": "uix:notary-stamp",
	});
}

export default Component;
