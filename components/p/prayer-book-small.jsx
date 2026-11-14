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
		"content": `<style>.t-z697m3r {
  d: path("M5 15.5V5a2.5 2.5 0 0 1 2.5-2.5H19V18H7.5A2.5 2.5 0 0 1 5 15.5Z");
}

.totmgg2vb {
  d: path("M5 15.5A2.5 2.5 0 0 1 7.5 13H19m-6 5v3.5l1.5-1.25L16 21.5V18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t-z697m3r"/><path class="totmgg2vb"/></g>`,
		"fallback": "uix-sharp:prayer-book-small",
	});
}

export default Component;
