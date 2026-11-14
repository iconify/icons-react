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
		"content": `<style>.qfo1hdcno {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18.5c2 0 3-1 3.5-3l1.5-10H13l1.25 8l1-2.5h3.25l1 4.5c.5 2 1 3 2 3M7 9.5h6.5");
}
</style><path class="qfo1hdcno"/>`,
		"fallback": "uix-sharp:mesa",
	});
}

export default Component;
