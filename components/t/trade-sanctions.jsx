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
		"content": `<style>.h-sqqjb7e {
  d: path("M9.5 4.5v1.1m3.9 3.9h1.1v-5m-11-1l17 17");
}

.l8si3eskw {
  d: path("M8.4 4.5H20v11.6m-4.4 3.4H4V7.9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l8si3eskw"/><path class="h-sqqjb7e"/></g>`,
		"fallback": "uix-sharp:trade-sanctions",
	});
}

export default Component;
