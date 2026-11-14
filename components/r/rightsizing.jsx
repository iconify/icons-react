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
		"content": `<style>.l6w_n1b3f {
  d: path("m15.5 14.75l3 1.75l3-1.75m-3 1.75V20M8 5q10.5-2.5 10.5 5m-2-2l2 2l2-2");
}

.pntkc3byg {
  d: path("m7.5 8l5 2.75v6l-5 2.75l-5-2.75v-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y6c42ccua {
  d: path("m2.5 10.75l5 2.75l5-2.75m-5 2.75v6m11-6.5l3 1.75v3.5l-3 1.75l-3-1.75v-3.5Z");
}
</style><g class="ulnmmdpxh"><path class="pntkc3byg"/><path class="y6c42ccua"/><path class="l6w_n1b3f"/></g>`,
		"fallback": "uix-sharp:rightsizing",
	});
}

export default Component;
