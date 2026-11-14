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
		"content": `<style>.mg2-xhbke {
  d: path("M5 2.5h14V21l-2.25-1.5L14.5 21L12 19.5L9.5 21l-2.25-1.5L5 21Z");
}

.n0hh8tbst {
  d: path("M7.75 7.25L9 8.5L11.25 6M14 7.25h2.25M7.75 12h3.5v3.5h-3.5ZM14 13.75h2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mg2-xhbke"/><path class="n0hh8tbst"/></g>`,
		"fallback": "uix-sharp:sports-betting-slip",
	});
}

export default Component;
