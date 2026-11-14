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
		"content": `<style>.h54_x7bqb {
  d: path("M10.5 5.5L7.75 10h3.5L8.5 14.5");
}

.i0pl85-nf {
  d: path("M4.5 2.5h10v15h-10Zm5 15V19a2.5 2.5 0 0 0 2.5 2.5h7.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i0pl85-nf"/><path class="h54_x7bqb"/></g>`,
		"fallback": "uix-sharp:phone-charging-station",
	});
}

export default Component;
