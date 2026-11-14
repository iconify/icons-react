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
		"content": `<style>.i4befhb6n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.875 4h10.25A4.375 4.375 0 0 1 21.5 8.375v1.75a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 10.125v-1.75A4.375 4.375 0 0 1 6.875 4M6.5 14.5v5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-5m-8 3h5M10 7l4 4.5M14 7l-4 4.5");
}
</style><path class="i4befhb6n"/>`,
		"fallback": "uix:printer-x",
	});
}

export default Component;
