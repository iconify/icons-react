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
		"content": `<style>.c088z1j4s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 18.5v-10A1.5 1.5 0 0 1 4.5 7h3c.5 2 2 3.5 4.5 4l4.5 1c3 .75 4.5 2.5 4.5 5v1.5Zm0-3h18m-11-5l1.25-1.75M13 11.5l1.25-1.75");
}
</style><path class="c088z1j4s"/>`,
		"fallback": "uix-sharp:training-shoes",
	});
}

export default Component;
