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
		"content": `<style>.ms1i8-btl {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 17.25h4M12 2.75l3 1.1v3c0 2-1.3 3.4-3 4.4c-1.7-1-3-2.4-3-4.4v-3Z");
}

.nk5tb1bvs {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 17.25h.01m2.99 0h.01");
}

.pbfwvq8tb {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13h18.5v8.25H2.75zm3 0V7.5m12.5 5.5V7.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="pbfwvq8tb"/><path class="nk5tb1bvs"/><path class="ms1i8-btl"/></g>`,
		"fallback": "iconoven:router-secure-sharp",
	});
}

export default Component;
