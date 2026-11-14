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
		"content": `<style>.p3j4k2tpi {
  fill: currentColor;
  d: path("M17.25 20a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.r6c8yfb7w {
  d: path("M2.5 9.5H6L7.75 4l2.5 11L12 9.5h1.5l1.5-3l1.5 3h5M16.75 18v-2.75c0-.85.65-1.5 1.5-1.5s1.5.65 1.5 1.5V18c.75.5 1.25 1.25 1.25 2c0 1.1-1.25 2-2.75 2s-2.75-.9-2.75-2c0-.75.5-1.5 1.25-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r6c8yfb7w"/><path class="p3j4k2tpi"/></g>`,
		"fallback": "uix-sharp:vital-signs",
	});
}

export default Component;
