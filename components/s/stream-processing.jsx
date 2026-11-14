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
		"content": `<style>.hiuq0pxsa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 7h7v10h-7ZM2 12c1-2 2.25-2 3.25 0s2.25 2 3.25 0m7 0h6m-2.25-2.25L21.5 12l-2.25 2.25");
}
</style><path class="hiuq0pxsa"/>`,
		"fallback": "uix-sharp:stream-processing",
	});
}

export default Component;
