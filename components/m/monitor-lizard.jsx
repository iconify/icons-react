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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wwoml4-px {
  d: path("m9.5 13.25l-1 3.25H7m7.5-3.75l1 3.75H17m2.5-6h1.25l1-1m-1 1l1 1");
}

.zgmlzhjgd {
  d: path("M2.5 11.5L8 10c1.5-1.5 3.5-2 6-2h2.5c1.5 0 2.5 1 3 2.5q-.75 1.5-3 1.5l-1.5.5c-2 1.25-5 1.25-7 0Z");
}
</style><g class="ulnmmdpxh"><path class="zgmlzhjgd"/><path class="wwoml4-px"/></g>`,
		"fallback": "uix-sharp:monitor-lizard",
	});
}

export default Component;
