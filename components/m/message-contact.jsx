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
		"content": `<style>.bq7qbhr_b {
  d: path("M10.5 8A2.25 2.25 0 1 0 15 8a2.25 2.25 0 1 0-4.5 0ZM8.75 18c0-3 1.75-5 4-5s4 2 4 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zgte65b0w {
  d: path("M5 3h13.5A2.5 2.5 0 0 1 21 5.5v10a2.5 2.5 0 0 1-2.5 2.5H8.75l-4 3v-3H5a2.5 2.5 0 0 1-2.5-2.5v-10A2.5 2.5 0 0 1 5 3Z");
}
</style><g class="ulnmmdpxh"><path class="zgte65b0w"/><path class="bq7qbhr_b"/></g>`,
		"fallback": "uix-sharp:message-contact",
	});
}

export default Component;
