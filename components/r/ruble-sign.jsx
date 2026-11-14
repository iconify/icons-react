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
		"content": `<style>.g63h9eb1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 20V4m0 0h5a4.25 4.25 0 0 1 0 8.5H5M5 16h9");
}
</style><path class="g63h9eb1n"/>`,
		"fallback": "uix-sharp:ruble-sign",
	});
}

export default Component;
