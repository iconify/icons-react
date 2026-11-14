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
		"content": `<style>.zt3pdhpyb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5h16V10c0 5-3.5 8.5-8 11c-4.5-2.5-8-6-8-11Zm0 3.75h16m-8 3v6m-1.75-4.75L12 10.25");
}
</style><path class="zt3pdhpyb"/>`,
		"fallback": "uix-sharp:route-number-shield",
	});
}

export default Component;
