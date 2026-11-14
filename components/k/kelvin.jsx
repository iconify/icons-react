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
		"content": `<style>.bgsyw5amc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 13.5V5a2.5 2.5 0 0 1 5 0v8.5a4.5 4.5 0 1 1-5 0ZM9 8v7.5M14.25 5H17m-2.75 4H17m-1.5 10.5h5");
}
</style><path class="bgsyw5amc"/>`,
		"fallback": "uix-sharp:kelvin",
	});
}

export default Component;
