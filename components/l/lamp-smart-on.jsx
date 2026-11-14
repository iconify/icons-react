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
		"content": `<style>.eu4rwmbno {
  d: path("M10.5 14v3.4m0 .4V21M7 21h6.5m-3-19v2.5M4 3.75L5.5 5M17 3.75L15.5 5m-1.25 12.75a5.5 5.5 0 0 1 7.5 0M16 19.5a2.75 2.75 0 0 1 4 0m-2 2h.01");
}

.o22xmoobv {
  fill: currentColor;
  d: path("M15.158 14H3.5l2.75-6.5h8.5l2.533 5.986");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o22xmoobv"/><path class="eu4rwmbno"/></g>`,
		"fallback": "uix-sharp:lamp-smart-on",
	});
}

export default Component;
