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
		"content": `<style>.gna36yb9r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14C4 8.5 6.5 6 9 6s5 2.5 6.5 8m-13 0h19m-2.25-8.5c-1 1.5-1.75 2.75-1.75 4a1.75 1.75 0 0 0 3.5 0c0-1.25-.75-2.5-1.75-4ZM6 17.5q2-1.5 4 0t4 0");
}
</style><path class="gna36yb9r"/>`,
		"fallback": "uix-sharp:spring-thaw",
	});
}

export default Component;
