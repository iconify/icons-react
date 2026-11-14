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
		"content": `<style>.bds_6obgy {
  d: path("M11.5 9H19a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2v3l-3-3h-4.5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uxhqkvq2m {
  d: path("M14.5 6.25V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2v2.75L6.75 12");
}
</style><g class="hntgybcog"><path class="uxhqkvq2m"/><path class="bds_6obgy"/></g>`,
		"fallback": "uix:mediation",
	});
}

export default Component;
