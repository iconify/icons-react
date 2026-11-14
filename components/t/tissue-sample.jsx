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
		"content": `<style>.cl777l8yo {
  d: path("M10.75 3.25c0-.75 2.5-.75 2.5 0m-2.5 0L7.5 14.5c-.25 1 .75 2.5 2.5 4m3.25-15.25L16.5 14.5c.25 1-.75 2.5-2.5 4M8.75 9.25l1.25.5m5.25-.5l-1.25.5");
}

.itcw-sbqw {
  fill: currentColor;
  d: path("M10.25 19.75c0-1.25 1-2 2-1.75c1.25.25 1.75 1.25 1.5 2.25s-1.25 1.5-2.25 1.25c-.75-.25-1.25-.75-1.25-1.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cl777l8yo"/><path class="itcw-sbqw"/></g>`,
		"fallback": "uix-sharp:tissue-sample",
	});
}

export default Component;
