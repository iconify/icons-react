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
		"content": `<style>.shf2jrb-j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7.5V3h9v4.5M11.8 19H2.5V7.5h17v5.8m-13-.8h6m2.25 5.5l2 2L21 15.75");
}
</style><path class="shf2jrb-j"/>`,
		"fallback": "uix-sharp:printing-press-check",
	});
}

export default Component;
