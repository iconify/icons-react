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
		"content": `<style>.m1iuiubpd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 21.5H3v-19h16.5v9.7M3 12h16.5M7 5.5V12m3-6.5V12m3 0l2.5-6.25M18 15v6m-3-3h6");
}
</style><path class="m1iuiubpd"/>`,
		"fallback": "uix-sharp:library-shelf-plus",
	});
}

export default Component;
