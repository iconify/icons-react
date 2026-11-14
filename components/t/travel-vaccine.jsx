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
		"content": `<style>.dup8nhb4r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16 3.5L20.5 8M14 5.5l4.5 4.5M17 6.5l-9 9V18h2.5l9-9M5 21l3-3");
}
</style><path class="dup8nhb4r"/>`,
		"fallback": "uix-sharp:travel-vaccine",
	});
}

export default Component;
