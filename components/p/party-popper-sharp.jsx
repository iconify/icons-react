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
		"content": `<style>.crgs_6jax {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.5 8h.01");
}

.ixuua29fi {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.36 20.07l3.78-9.64l.36-.93l.71.71l5.58 5.58l.71.71l-.93.36l-9.64 3.78L3 21zM5.4 15.4l3.2 3.2m1.9-11.85l1.827-3.654l-.077-.346m5 10.75l3.654-1.827l.346.077m-5.75-8.5l-.75 2.25m6 3l-2.25.75");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="ixuua29fi"/><path class="crgs_6jax"/></g>`,
		"fallback": "iconoven:party-popper-sharp",
	});
}

export default Component;
