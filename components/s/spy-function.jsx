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
		"content": `<style>.hl24abeql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.75h19M6 5.75c2-3 10-3 12 0c-2 3-10 3-12 0Zm6 0h.01m.99 8c-1.25-.5-2.75 0-2.75 1.5v5.5m-1.5-4.25h3.5M7 13.25Q4.5 17 7 20.75m8.75-7.5q2.5 3.75 0 7.5");
}
</style><path class="hl24abeql"/>`,
		"fallback": "uix-sharp:spy-function",
	});
}

export default Component;
