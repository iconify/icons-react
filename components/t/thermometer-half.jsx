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
		"content": `<style>.co4p_zdlx {
  d: path("M7.5 12.5v-7a3 3 0 0 1 6 0v7a5 5 0 1 1-6 0Z");
}

.d7my5z47k {
  d: path("M10.5 10v6.5M16.25 6h3m-3 4h3");
}

.nsnol6f2e {
  fill: currentColor;
  d: path("M8.5 16.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="co4p_zdlx"/><path class="nsnol6f2e"/><path class="d7my5z47k"/></g>`,
		"fallback": "uix-sharp:thermometer-half",
	});
}

export default Component;
