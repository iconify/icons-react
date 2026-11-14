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
		"content": `<style>.iuxghox4q {
  d: path("M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM4 21c0-4 3.5-6.5 8-6.5q.232 0 .461.009m2.789-.259h3.25l2.5 2.5v4.75h-5.75Z");
}

.k_mwu3bem {
  d: path("M18.5 14.25v2.5H21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iuxghox4q"/><path class="k_mwu3bem"/></g>`,
		"fallback": "uix-sharp:user-candidate",
	});
}

export default Component;
