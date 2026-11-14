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

.ncugpdz5f {
  d: path("M8 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-1.5 6.75c0-1.5 1.5-2.25 3.5-2.25s3.5.75 3.5 2.25M14 7.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m1.5 4.25c1.75 0 2.5 1 2.5 2.25");
}

.pvqaf_bvd {
  d: path("M2.5 5.5A2.5 2.5 0 0 1 5 3h14a2.5 2.5 0 0 1 2.5 2.5V15a2.5 2.5 0 0 1-2.5 2.5h-8L6.5 21v-3.5H5A2.5 2.5 0 0 1 2.5 15Z");
}
</style><g class="hntgybcog"><path class="pvqaf_bvd"/><path class="ncugpdz5f"/></g>`,
		"fallback": "uix:message-group",
	});
}

export default Component;
