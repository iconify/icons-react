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
		"content": `<style>.lvv-qkiex {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 15h14.5a1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25H3.75a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 3.75 15m15.75 2V3.5m-2 0h4M6.25 7h6A1.75 1.75 0 0 1 14 8.75v4.5A1.75 1.75 0 0 1 12.25 15h-6a1.75 1.75 0 0 1-1.75-1.75v-4.5A1.75 1.75 0 0 1 6.25 7m3 0v2.5m-5 10.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m10 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><path class="lvv-qkiex"/>`,
		"fallback": "uix:stock-trolley",
	});
}

export default Component;
