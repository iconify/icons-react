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
		"content": `<style>.i01psdbrr {
  d: path("m6.5 12l4 2.25v4.5L6.5 21l-4-2.25v-4.5Z");
}

.uilal1b5y {
  d: path("m2.5 14.25l4 2.25l4-2.25m-4 2.25V21m6-8.75L16.25 11l5.5-5.5l-2.5-2.5l-5.5 5.5Zm1.25-3.75l2.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i01psdbrr"/><path class="uilal1b5y"/></g>`,
		"fallback": "uix-sharp:spatial-stylus",
	});
}

export default Component;
