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
		"content": `<style>.p6-u18bkm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.1 14H2.5V3.5h13v8.7m2.078-.755L15.5 10.5V7L21 4.5V13l-.235-.107m-1.457-.662l-.273-.124M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="p6-u18bkm"/>`,
		"fallback": "uix-sharp:video-upload",
	});
}

export default Component;
