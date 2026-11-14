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
		"content": `<style>.cpkdv1bxl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 11.5V15c0 3.5 2 6 4.5 6s4.5-2.5 4.5-6v-3.5m-14-2c3.5-4 7-4 9.5-2.25c2.5-1.75 6-1.75 9.5 2.25m-19 0c1.5 1.25 3.25 2 5 2h9c1.75 0 3.5-.75 5-2m-9.5 4V17");
}
</style><path class="cpkdv1bxl"/>`,
		"fallback": "uix-sharp:tongue",
	});
}

export default Component;
