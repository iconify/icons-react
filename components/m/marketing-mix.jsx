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
		"content": `<style>.s564unbnx {
  d: path("M10.25 5.5v7.75H18a7.75 7.75 0 1 1-7.75-7.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z3cyklbip {
  d: path("M13 10.5V2.75a7.75 7.75 0 0 1 7.75 7.75ZM2.5 13.25h7.75m0 0V21");
}
</style><g class="ulnmmdpxh"><path class="s564unbnx"/><path class="z3cyklbip"/></g>`,
		"fallback": "uix-sharp:marketing-mix",
	});
}

export default Component;
