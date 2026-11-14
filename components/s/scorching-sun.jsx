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
		"content": `<style>.uysdcgxan {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 11a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM11 4.5v-2m0 15v2M4.5 11h-2m4-4.5L5 5m10.5 1.5L17 5M6.5 15.5L5 17m13-3.25c2.5 2 3 3.5 3 5.25a3 3 0 0 1-6 0c0-1.5.75-2.5 1.5-3c0 1 .5 1.5 1 1.5c.5-1 .5-2.5.5-3.75Z");
}
</style><path class="uysdcgxan"/>`,
		"fallback": "uix-sharp:scorching-sun",
	});
}

export default Component;
