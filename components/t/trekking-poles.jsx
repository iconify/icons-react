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
		"content": `<style>.ymzgkfv2r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 3.5l3 17m8.5-17l-3 17M4 7h4.5m7 0H20");
}
</style><path class="ymzgkfv2r"/>`,
		"fallback": "uix-sharp:trekking-poles",
	});
}

export default Component;
