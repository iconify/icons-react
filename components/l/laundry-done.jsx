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
		"content": `<style>.e9fltbcec {
  d: path("m14.75 18l2 2L21 15.75");
}

.s_s6-zb0b {
  d: path("M17 15.793V9.5l2.25 1l1.75-4l-5.5-3c-.75 1.5-2 2.25-3.5 2.25S9.25 5 8.5 3.5L3 6.5l1.75 4L7 9.5v11h6.307");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s_s6-zb0b"/><path class="e9fltbcec"/></g>`,
		"fallback": "uix-sharp:laundry-done",
	});
}

export default Component;
