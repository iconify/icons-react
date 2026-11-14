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
		"content": `<style>.emxmgobwc {
  d: path("m14.5 9.5l2-4.75c.5-1.25 2.25-1.5 3.25-.5L21 5.75L18.75 7l-1 3M7.5 14L6 18m8.5-4l1.5 4M2.5 16.75c4.5 3.75 14.5 3.75 19 0M6 11L3.25 9");
}

.nekneubfb {
  d: path("M6 9.5h10V14H6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nekneubfb"/><path class="emxmgobwc"/></g>`,
		"fallback": "uix-sharp:play-room",
	});
}

export default Component;
