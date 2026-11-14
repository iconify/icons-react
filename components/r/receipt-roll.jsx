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
		"content": `<style>.lk7q36b1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h18v5H3Zm3 5V21l2-1.25L10 21l2-1.25L14 21l2-1.25L18 21V7.5M9 11h6m-6 4h4");
}
</style><path class="lk7q36b1i"/>`,
		"fallback": "uix-sharp:receipt-roll",
	});
}

export default Component;
