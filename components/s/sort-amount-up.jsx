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
		"content": `<style>.g_sz0cjkw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 20V4m-3 3l3-3l3 3m3-3H16v2.5h-3.5Zm0 6.75h6v2.5h-6Zm0 6.75H21V20h-8.5Z");
}
</style><path class="g_sz0cjkw"/>`,
		"fallback": "uix-sharp:sort-amount-up",
	});
}

export default Component;
