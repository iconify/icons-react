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
		"content": `<style>.lm1s_wbjk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.413 18.122L10.25 18L8 19.5L6 18l-2 1.5v-17h12.5v10.4M7.5 7H13m-5.5 4H13m2.5 10.5a2.25 2.25 0 0 1-.25-4.5a2.75 2.75 0 0 1 5 .75a1.9 1.9 0 0 1-.5 3.75Z");
}
</style><path class="lm1s_wbjk"/>`,
		"fallback": "uix-sharp:invoice-cloud",
	});
}

export default Component;
