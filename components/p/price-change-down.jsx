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
		"content": `<style>.cyymez1do {
  d: path("M8.5 4.5h11v15h-11l-5-7.5ZM8.25 12h.01M14 9v6");
}

.gr8p5ub0w {
  d: path("M11.75 13L14 15.25L16.25 13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cyymez1do"/><path class="gr8p5ub0w"/></g>`,
		"fallback": "uix-sharp:price-change-down",
	});
}

export default Component;
