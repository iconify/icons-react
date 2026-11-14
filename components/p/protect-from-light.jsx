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
		"content": `<style>.e11_mfbrb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h6V7H7Zm7.7 19H4V7h12v4.4m0 6.6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2-2v-1.75M18 20v1.75M16 18h-1.75M20 18h1.75m-7-3.25l6.5 6.5");
}
</style><path class="e11_mfbrb"/>`,
		"fallback": "uix-sharp:protect-from-light",
	});
}

export default Component;
