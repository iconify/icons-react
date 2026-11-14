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
		"content": `<style>.iloc6ub9m {
  d: path("M11.7 21.5H5v-19h12.5v8.9");
}

.mwl6-mb8y {
  d: path("M14.5 15.5h7v6.25h-7Zm0 2.5h7m-4.75-3.75v2.25m2.5-2.25v2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iloc6ub9m"/><path class="mwl6-mb8y"/></g>`,
		"fallback": "uix-sharp:schedule-viewing",
	});
}

export default Component;
