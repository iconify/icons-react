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
		"content": `<style>.b65qe80wr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21V6M7 21V6m-3.5 4H7m-3.5 4H7m0-8h1.5c4.5 0 4 9 9.5 9h3.5M10 20q2.25-1.5 4.75 0q2.25 1.5 4.75 0");
}
</style><path class="b65qe80wr"/>`,
		"fallback": "uix-sharp:water-slide",
	});
}

export default Component;
