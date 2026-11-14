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
		"content": `<style>.o314tvbnr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 5H10c5 0 8 3.5 9.5 7c-1.5 3.5-4.5 7-9.5 7H5.5c2-3 2-11 0-14Zm-3 4h4m-4 6h4");
}
</style><path class="o314tvbnr"/>`,
		"fallback": "uix-sharp:logic-gate-or",
	});
}

export default Component;
