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
		"content": `<style>.x8-g3l3ln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14.051 3.947l3.898 2.25l-8 13.856l-3.898-2.25Zm-1.299-.75l6.496 3.75m-9.947 5.227l3.898 2.25");
}
</style><path class="x8-g3l3ln"/>`,
		"fallback": "uix-sharp:test-tube",
	});
}

export default Component;
