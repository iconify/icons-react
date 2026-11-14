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
		"content": `<style>.gp33nkbkb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20C4 10.5 8.5 4 14.5 4c3.5 0 6 2 6 5c-2.5-1.5-6.5-.5-7 3m-11 8h11m4.5-5.5V18m0 3h.01");
}
</style><path class="gp33nkbkb"/>`,
		"fallback": "uix-sharp:tsunami-warning",
	});
}

export default Component;
