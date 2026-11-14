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
		"content": `<style>.hn7tnnbwb {
  d: path("M2.5 5h19v14h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x6j_c9b2b {
  d: path("M7.5 10h8v4h-8ZM5 12h2.5M5 10.25v3.5M15.5 12h4m-9.25-2v1.5m2.5-1.5v1.5");
}
</style><g class="ulnmmdpxh"><path class="hn7tnnbwb"/><path class="x6j_c9b2b"/></g>`,
		"fallback": "uix-sharp:vaccination-card",
	});
}

export default Component;
