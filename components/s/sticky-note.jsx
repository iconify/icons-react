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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kgfb2rp5t {
  d: path("M5.75 3.75h12.5q2 0 2 2V13q0 2-1.41 3.41l-2.43 2.43Q15 20.25 13 20.25H5.75q-2 0-2-2V5.75q0-2 2-2");
}

.tilxn3bvx {
  d: path("M20.25 15H17a2 2 0 0 0-2 2v3.25M7.5 8.75h9m-9 3.75H13");
}
</style><g class="hntgybcog"><path class="kgfb2rp5t"/><path class="tilxn3bvx"/></g>`,
		"fallback": "iconoven:sticky-note",
	});
}

export default Component;
