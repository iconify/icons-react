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
		"content": `<style>.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.p5o4pdbkp {
  d: path("m14 6l1 3l3 1l-3 1l-1 3l-1-3l-3-1l3-1ZM7.5 7.5h.01m-.51 8a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm9.5 1.5h.01m-4.51.75h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="p5o4pdbkp"/></g>`,
		"fallback": "uix-sharp:starfield",
	});
}

export default Component;
