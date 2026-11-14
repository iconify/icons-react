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
		"content": `<style>.rur0mzb4g {
  d: path("M18.495 9.25A7.5 7.5 0 1 1 12 5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x66l1xl9e {
  d: path("m9 2.5l3 3l-3 3");
}
</style><g class="ulnmmdpxh"><path class="rur0mzb4g"/><path class="x66l1xl9e"/></g>`,
		"fallback": "uix-sharp:rotate-cw",
	});
}

export default Component;
