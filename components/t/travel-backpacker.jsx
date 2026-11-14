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
		"content": `<style>.m6g0ntbfa {
  d: path("M5.5 16.5V8a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v8.5M9.5 5a2.5 2.5 0 0 1 5 0M3 16.5h18v5H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xass30bzm {
  d: path("M8.5 13.5v-4h7v4");
}
</style><g class="ulnmmdpxh"><path class="m6g0ntbfa"/><path class="xass30bzm"/></g>`,
		"fallback": "uix-sharp:travel-backpacker",
	});
}

export default Component;
