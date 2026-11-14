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
		"content": `<style>.rj-w0_f1t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 7.75a3 3 0 1 1 4.75-2a3 3 0 1 1-2 4.75l-5.75 5.75a3 3 0 1 1-4.75 2a3 3 0 1 1 2-4.75Z");
}
</style><path class="rj-w0_f1t"/>`,
		"fallback": "uix-sharp:pin-dog-park",
	});
}

export default Component;
