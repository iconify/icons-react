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
		"content": `<style>.o7old9biq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.054 3.717l8.803 1.872l-2.911 13.694l-8.803-1.872ZM19.75 9.75L21.5 7.5m-18.75-1l2 1.75");
}
</style><path class="o7old9biq"/>`,
		"fallback": "uix-sharp:red-card",
	});
}

export default Component;
