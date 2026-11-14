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
		"content": `<style>.annqv8obo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.468 11.509L14.25 9.75L8.5 7.5l12-4.5l-3.188 7.97M14.25 9.75L20.5 3m-10 10.25h.01m-3.26 2.5h.01M4 18.25h.01M18 21.5c-1.75-1.75-3-3.25-3-4.75a3 3 0 0 1 6 0c0 1.5-1.25 3-3 4.75Z");
}
</style><path class="annqv8obo"/>`,
		"fallback": "uix-sharp:remit-tracking",
	});
}

export default Component;
