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
		"content": `<style>.o9y5yuz6p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 21l9.5-9.5m-1-1l8-8l2 2v2h-2v2h-2v2h-2v2h-2Z");
}
</style><path class="o9y5yuz6p"/>`,
		"fallback": "uix-sharp:pole-saw",
	});
}

export default Component;
