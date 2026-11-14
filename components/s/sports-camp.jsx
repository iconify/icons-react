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
		"content": `<style>.q8awv0zqt {
  d: path("M2.5 19h19M4 19l8-15l8 15");
}

.rr2_tmutn {
  d: path("m9 19l3-6.5l3 6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q8awv0zqt"/><path class="rr2_tmutn"/></g>`,
		"fallback": "uix-sharp:sports-camp",
	});
}

export default Component;
