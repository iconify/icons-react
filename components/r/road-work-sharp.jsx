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
		"content": `<style>.mubwpwb3i {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.75 10h.01");
}

.qg1rkpyth {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.98 4.99l7.29 13.02l.98 1.74H2.75l.98-1.74l7.29-13.02l.98-1.74z");
}

.ub4bxk3ds {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.75 11.75l-.75 3l-1.5 3m1.5-3l1.5 3m-1-5.25l2.75 1.25m0 0l1.5 3m-.75 1.5l1.25-1.5l2 1.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="qg1rkpyth"/><path class="mubwpwb3i"/><path class="ub4bxk3ds"/></g>`,
		"fallback": "iconoven:road-work-sharp",
	});
}

export default Component;
