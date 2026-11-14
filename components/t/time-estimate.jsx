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
		"content": `<style>.me26nsb9d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h14M5 21h14M6.5 3v2.5C6.5 9 11 10.25 11 12s-4.5 3-4.5 6.5V21m11-18v2.5C17.5 9 13 10.25 13 12s4.5 3 4.5 6.5V21m-8 0l2.5-3l2.5 3");
}
</style><path class="me26nsb9d"/>`,
		"fallback": "uix-sharp:time-estimate",
	});
}

export default Component;
