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
		"content": `<style>.iz8-h7bcv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5h16v17H4ZM7.5 8H12m-4 4v5m2.5-5v5m2.5-5v5m3-5v5");
}
</style><path class="iz8-h7bcv"/>`,
		"fallback": "uix-sharp:shipping-label",
	});
}

export default Component;
