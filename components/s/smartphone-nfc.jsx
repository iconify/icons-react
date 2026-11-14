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
		"content": `<style>.w16z15b_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h10.5v19H4ZM8 18h2.5m7.181-8.25a3.5 3.5 0 0 1 0 4.5m2.298-6.428a6.5 6.5 0 0 1 0 8.356");
}
</style><path class="w16z15b_q"/>`,
		"fallback": "uix-sharp:smartphone-nfc",
	});
}

export default Component;
