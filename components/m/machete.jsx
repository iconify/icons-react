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
		"content": `<style>.nr2fehbzj {
  d: path("M8.75 13.25L18.5 3.5c1.5-1.5 3-1 2.75 1.25C19.5 9.25 15 13 11 15.5Zm-1-1l4 4");
}

.qwwmhdber {
  d: path("m8.737 12.788l2.475 2.475l-4.949 4.949l-2.475-2.475Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nr2fehbzj"/><path class="qwwmhdber"/></g>`,
		"fallback": "uix-sharp:machete",
	});
}

export default Component;
