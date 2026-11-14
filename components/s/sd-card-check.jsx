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
		"content": `<style>.kg0sxwmif {
  d: path("m9 15.5l2 2l4-4");
}

.p1ukvsbes {
  d: path("M9 2.5h8a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-13Zm1 4v3m3-3v3m3-3v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p1ukvsbes"/><path class="kg0sxwmif"/></g>`,
		"fallback": "uix-sharp:sd-card-check",
	});
}

export default Component;
