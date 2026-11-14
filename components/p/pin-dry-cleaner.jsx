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
		"content": `<style>.roin4pbxx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 10.5l-8.75 6.75Q2.5 18.5 4 18.5h16q1.5 0 .75-1.25ZM9.75 6.75A2.25 2.25 0 1 1 12 9v1.5");
}
</style><path class="roin4pbxx"/>`,
		"fallback": "uix-sharp:pin-dry-cleaner",
	});
}

export default Component;
