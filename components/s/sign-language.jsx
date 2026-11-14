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
		"content": `<style>.jm91g058p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 13V6.5m3 5.5V4.5m3 7.5V5m3 8V7.5m0 5.5v2.5c0 3-1.75 5-4.5 5c-2.5 0-4-1.25-5-3l-3-4.5M3 8.5l2 2M3.5 5L6 6");
}
</style><path class="jm91g058p"/>`,
		"fallback": "uix-sharp:sign-language",
	});
}

export default Component;
