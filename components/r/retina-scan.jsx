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
		"content": `<style>.b28rrzbgr {
  d: path("M10.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.o-sa1qs-x {
  d: path("M3.5 8V6A2.5 2.5 0 0 1 6 3.5h2m8 0h2A2.5 2.5 0 0 1 20.5 6v2m0 8v2a2.5 2.5 0 0 1-2.5 2.5h-2m-8 0H6A2.5 2.5 0 0 1 3.5 18v-2m4-4a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o-sa1qs-x"/><path class="b28rrzbgr"/></g>`,
		"fallback": "uix-sharp:retina-scan",
	});
}

export default Component;
