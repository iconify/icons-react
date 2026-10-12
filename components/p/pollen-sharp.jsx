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
		"content": `<style>.asj-eub5t {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.16 12.37A2.25 2.25 0 1 1 12.34 16a2.25 2.25 0 1 1-3.09 2.25A2.25 2.25 0 1 1 6.16 16a2.25 2.25 0 1 1 1.18-3.63a2.25 2.25 0 1 1 3.82 0Z");
}

.tffx2vbbs {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.5 9h.01m-.76-4.75h.01M20 5.5h.01");
}

.tyzpclblr {
  cx: 9.25px;
  cy: 15px;
  r: 1.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="asj-eub5t"/><circle class="tyzpclblr"/><path class="tffx2vbbs"/></g>`,
		"fallback": "iconoven:pollen-sharp",
	});
}

export default Component;
