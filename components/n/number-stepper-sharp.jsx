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
		"content": `<style>.mxp-h_hkz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7h18.5v10H2.75zM12 9.5v5M5.75 12h3m6.5 0h3m-1.5-1.5v3");
}
</style><path class="mxp-h_hkz"/>`,
		"fallback": "iconoven:number-stepper-sharp",
	});
}

export default Component;
