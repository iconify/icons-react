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
		"content": `<style>.qm58x3bta {
  d: path("M4.5 10h15v11h-15ZM8 10V7a4 4 0 0 1 7.75-1.25");
}

.t3asq03tp {
  d: path("M10.5 14.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm1.5 1.5v1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qm58x3bta"/><path class="t3asq03tp"/></g>`,
		"fallback": "uix-sharp:lock-keyhole-open",
	});
}

export default Component;
