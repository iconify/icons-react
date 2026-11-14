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
		"content": `<style>.f45g2sb_k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 13.5v-2C3 9 6 7 9 7.5c2 .25 3 1 4.5 1c2.5 0 4-1.5 6-.5c1.5.75 1.5 2.5 1.5 3.5v2m-18.5 0h19M6 17.5h12");
}
</style><path class="f45g2sb_k"/>`,
		"fallback": "uix-sharp:snow-cover",
	});
}

export default Component;
