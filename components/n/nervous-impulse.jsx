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
		"content": `<style>.cp7sjfz6z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm5 0h3l2-6.5l2 6.5h7m0-2.75v5.5");
}
</style><path class="cp7sjfz6z"/>`,
		"fallback": "uix-sharp:nervous-impulse",
	});
}

export default Component;
