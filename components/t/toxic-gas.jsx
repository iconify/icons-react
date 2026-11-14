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
		"content": `<style>.g720__wje {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 12.5a3.25 3.25 0 0 1 0-6.5a6 6 0 0 1 10-.5a3.75 3.75 0 0 1 1 7Zm.5 3q-1.5 1.5 0 3t0 3m5-6q-1.5 1.5 0 3t0 3m5-6q-1.5 1.5 0 3t0 3");
}
</style><path class="g720__wje"/>`,
		"fallback": "uix-sharp:toxic-gas",
	});
}

export default Component;
