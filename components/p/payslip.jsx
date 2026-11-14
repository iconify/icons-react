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
		"content": `<style>.ieetf2mle {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3h13v18l-3-2l-3.5 2l-3.5-2l-3 2Zm3 4.5h7m-7 3.5h7m-7 3.5h4");
}
</style><path class="ieetf2mle"/>`,
		"fallback": "uix-sharp:payslip",
	});
}

export default Component;
