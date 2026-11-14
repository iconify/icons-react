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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vw5q7j4jo {
  d: path("M6.5 8.5H9v7H6.5Zm4.25 0h2.5v7h-2.5Zm4.25 0h2.5v7H15Z");
}

.wvb4twqow {
  d: path("M3 6h18v12H3Z");
}
</style><g class="ulnmmdpxh"><path class="wvb4twqow"/><path class="vw5q7j4jo"/></g>`,
		"fallback": "uix-sharp:switch-dip",
	});
}

export default Component;
