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
		"content": `<style>.hu1wfxb8x {
  d: path("M11.907 20.5H4.5c-1.1 0-2-.9-2-2v-13c0-1.1.9-2 2-2H9l2 2h8.5c1.1 0 2 .9 2 2v5.552M2.5 8.75h19");
}

.q_1r2ybac {
  d: path("M5 13.5h2.5L9 11l2 5.5l1.5-3h1m1.25 3.75h6.5v4.5h-6.5Zm1.5 0V16c0-1 .75-1.75 1.75-1.75s1.75.75 1.75 1.75v1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hu1wfxb8x"/><path class="q_1r2ybac"/></g>`,
		"fallback": "uix-sharp:records-access-lock",
	});
}

export default Component;
