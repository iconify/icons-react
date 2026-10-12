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
		"content": `<style>.ie6pbzb_j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.75 5.5h.01m-2.51 2.25h.01M13.5 9h.01");
}

.nmfxnfgfk {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 2.75c0 3.5-1.5 6.25-3.5 9.5c-.75 1.25 0 2.25 1.5 2.25h2.5m8-2.75l.5-5.25v-.75h1.5v.75l.5 5.25Zm-3.5 0h8.5V14h-8.5zm1 2.25h6.5v7.25h-6.5z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="nmfxnfgfk"/><path class="ie6pbzb_j"/></g>`,
		"fallback": "iconoven:nasal-spray-sharp",
	});
}

export default Component;
