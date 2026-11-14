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
		"content": `<style>.jlzi8_bbc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3.5c2 0 3 .5 4 2.5l7 14.5h2m-5.75-7.75L6 20.5");
}
</style><path class="jlzi8_bbc"/>`,
		"fallback": "uix-sharp:lambda-symbol",
	});
}

export default Component;
