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
		"content": `<style>.m1vpoccbv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5h18V21H3Zm0 5h18m-13-7v4m8-4v4M7.5 21L9 14.5m3 6.5v-7.5m4.5 7.5L15 14.5");
}
</style><path class="m1vpoccbv"/>`,
		"fallback": "uix-sharp:lawn-calendar",
	});
}

export default Component;
