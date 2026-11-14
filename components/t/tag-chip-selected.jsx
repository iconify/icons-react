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
		"content": `<style>.iiuv-xbvd {
  d: path("M5.5 6.5h13A3.5 3.5 0 0 1 22 10v4a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 14v-4a3.5 3.5 0 0 1 3.5-3.5Z");
}

.m5c3x7bui {
  d: path("m5 12l1.75 1.75l2.75-3m3 1.25H18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iiuv-xbvd"/><path class="m5c3x7bui"/></g>`,
		"fallback": "uix-sharp:tag-chip-selected",
	});
}

export default Component;
