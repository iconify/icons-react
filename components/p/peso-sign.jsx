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
		"content": `<style>.tgaz3c84z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 20V4m0 0h4.5a4.5 4.5 0 0 1 0 9H8M5 7h14M5 10h14");
}
</style><path class="tgaz3c84z"/>`,
		"fallback": "uix-sharp:peso-sign",
	});
}

export default Component;
