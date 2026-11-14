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
		"content": `<style>.si_iu_u-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.5 6l3.75-1.5l3.5 1.5l3.75-1.5l4 13.5l-6.5 2l-6-2l-6.5 2Zm3.75-1.5L9 18m4.75-12L15 20");
}
</style><path class="si_iu_u-q"/>`,
		"fallback": "uix-sharp:map-tilt",
	});
}

export default Component;
