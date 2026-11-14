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
		"content": `<style>.t-1iyhydp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm10 10a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM7 5.5v3M5.5 7h3m7 10h3M13.75 5.5q5.75 0 5.75 4.75M17.25 8l2.25 2.25L21.75 8m-11.5 10.5q-5.75 0-5.75-4.75M2.25 16l2.25-2.25L6.75 16");
}
</style><path class="t-1iyhydp"/>`,
		"fallback": "uix-sharp:ion-exchange",
	});
}

export default Component;
