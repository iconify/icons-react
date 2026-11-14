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
		"content": `<style>.nar44fbvd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11.5h18V18H3ZM5.5 18v3.5m13-3.5v3.5m-11-10v-3q0-3.5-3-4.5m3 4.5q0-3.5 3-4.5m6 7.5v-3q0-3.5-3-4.5m3 4.5q0-3.5 3-4.5");
}
</style><path class="nar44fbvd"/>`,
		"fallback": "uix-sharp:raised-bed-vegetables",
	});
}

export default Component;
