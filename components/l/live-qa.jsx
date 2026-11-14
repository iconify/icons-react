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
		"content": `<style>.r_ns2mb3g {
  d: path("M9.75 9.75c0-1.25 1-2 2.25-2s2.25.85 2.25 2c0 1.5-2.25 1.75-2.25 3.25m0 2.75h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uw2j_fbcl {
  d: path("M3.5 4.5h17a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1Z");
}
</style><g class="ulnmmdpxh"><path class="uw2j_fbcl"/><path class="r_ns2mb3g"/></g>`,
		"fallback": "uix-sharp:live-qa",
	});
}

export default Component;
