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
		"content": `<style>.mhir0x3vn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 11a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm4-6.5v-2m4.5 4L18 5m.5 6h2m-4 4.5L18 17M7.5 15.5L6 17m-.5-6h-2m4-4.5L6 5M2.5 20.5h19");
}
</style><path class="mhir0x3vn"/>`,
		"fallback": "uix-sharp:polar-day",
	});
}

export default Component;
