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
		"content": `<style>.rjtirjbek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h8.5l9.5 9.5l-8.5 8.5L3 11.5Zm3.5 3.5h.01m2.74 2.75l5.5 5.5m0-5.5l-5.5 5.5");
}
</style><path class="rjtirjbek"/>`,
		"fallback": "uix-sharp:sold-out",
	});
}

export default Component;
