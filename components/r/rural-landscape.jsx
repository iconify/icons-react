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
		"content": `<style>.dtuwr4b8m {
  d: path("M4 15.5V10l1.75-3.5l2.75-2l2.75 2L13 10v5.5Z");
}

.l5a681s_f {
  d: path("M7 11.5h3v4H7Zm6-.5q4-4 8.5-1m-19 10Q8 17.5 13 19q4.5 1.5 8.5-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dtuwr4b8m"/><path class="l5a681s_f"/></g>`,
		"fallback": "uix-sharp:rural-landscape",
	});
}

export default Component;
