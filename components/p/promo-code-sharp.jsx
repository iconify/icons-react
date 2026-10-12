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
		"content": `<style>.cl6c5ob5f {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 10.25h.01M9 13.75h.01M13 12h.01m2.74 0h.01m2.74 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.z-vf40aej {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.25h18.5v9.5H2.75zm3 6.75l3.5-4");
}
</style><g class="ux2u0rbkq"><path class="z-vf40aej"/><path class="cl6c5ob5f"/></g>`,
		"fallback": "iconoven:promo-code-sharp",
	});
}

export default Component;
