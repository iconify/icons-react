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
		"content": `<style>.wfe-ixbpi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 12a3.5 3.5 0 0 1 0-7a5.5 5.5 0 0 1 9-.5a3.75 3.75 0 0 1 0 7.5Zm1 2.75L4.5 19m6-4.25L8.5 19m8.25-3.5h2.5A1.75 1.75 0 0 1 21 17.25v2.25a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 15 19.5v-2.25a1.75 1.75 0 0 1 1.75-1.75M15 17.75h6m-4.25-3.25V16m2.5-1.5V16");
}
</style><path class="wfe-ixbpi"/>`,
		"fallback": "uix:rainy-season",
	});
}

export default Component;
