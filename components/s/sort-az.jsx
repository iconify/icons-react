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
		"content": `<style>.oz9ga6beo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.5 10.5l2.75-7l2.75 7M14.5 8H18m-4.5 5.5H19l-5.5 7H19M7 4v16m-3-3l3 3l3-3");
}
</style><path class="oz9ga6beo"/>`,
		"fallback": "uix-sharp:sort-az",
	});
}

export default Component;
