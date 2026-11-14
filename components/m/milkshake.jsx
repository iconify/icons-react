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
		"content": `<style>.w5u19bcrd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7h11L15 16.5H9Zm5.5 9.5V21m-3.5 0h7m-8-14c0-2.25 2-3.75 4.5-3.75s4.5 1.5 4.5 3.75m-3-3.5L16 2");
}
</style><path class="w5u19bcrd"/>`,
		"fallback": "uix-sharp:milkshake",
	});
}

export default Component;
