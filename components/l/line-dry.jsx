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
		"content": `<style>.oq2nkbb8e {
  d: path("M3 20.5v-17h18v17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wv80v0bbg {
  d: path("M9.5 3.5L5.75 5.75L7 9.25l1.5-.5v8.75h7V8.75l1.5.5l1.25-3.5L14.5 3.5q-2.5 2.5-5 0Z");
}
</style><g class="ulnmmdpxh"><path class="oq2nkbb8e"/><path class="wv80v0bbg"/></g>`,
		"fallback": "uix-sharp:line-dry",
	});
}

export default Component;
