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
		"content": `<style>.mlsygubuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 8.5q8-6.5 16 0Zm2.5 0v12m11-12v12m-8 0h5");
}
</style><path class="mlsygubuv"/>`,
		"fallback": "uix-sharp:shade-canopy",
	});
}

export default Component;
