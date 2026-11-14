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
		"content": `<style>.hwbwycb8o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20V4h5v16m0-16c5.5 0 6 15.5 12.5 15.5M3.5 9h5m-5 5h5");
}
</style><path class="hwbwycb8o"/>`,
		"fallback": "uix-sharp:pin-playground",
	});
}

export default Component;
