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

.wmzn5gm0b {
  d: path("M10.25 8.5c.5.75 2 .75 2.5 0M2.5 21h19");
}

.yg_fy8b4q {
  d: path("M2.5 17.5h5c.5-3.25 7.5-3.25 8 0h6M14 2.5v7c0 1.4-1.1 2.5-2.5 2.5S9 10.9 9 9.5v-7");
}
</style><g class="ulnmmdpxh"><path class="yg_fy8b4q"/><path class="wmzn5gm0b"/></g>`,
		"fallback": "uix-sharp:lump-check",
	});
}

export default Component;
