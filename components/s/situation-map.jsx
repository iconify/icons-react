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
		"content": `<style>.osory8bev {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 5.5l6-2l7 2l6-2v15l-6 2l-7-2l-6 2Zm3 10l2-1.25M10 12.5l2-1.25m4.5-2.75h.01");
}
</style><path class="osory8bev"/>`,
		"fallback": "uix-sharp:situation-map",
	});
}

export default Component;
