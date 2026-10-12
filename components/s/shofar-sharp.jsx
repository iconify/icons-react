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
		"content": `<style>.rho2buegp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 18.5c6 .25 10.5-2.5 12.75-8.25L17 5.5l4.25 1.25l-1.5 5.25c-2.75 7-8.75 9.5-17 9ZM16 9.75L20 11m-6.25 3l3.75 1.75");
}
</style><path class="rho2buegp"/>`,
		"fallback": "iconoven:shofar-sharp",
	});
}

export default Component;
