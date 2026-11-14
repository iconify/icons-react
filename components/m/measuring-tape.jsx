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
		"content": `<style>.d2tx-bb_e {
  d: path("M2.5 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.i-83ehx9c {
  d: path("M9 16h7c2.75 0 4 1.75 4 4.5M7 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm11.5 11h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d2tx-bb_e"/><path class="i-83ehx9c"/></g>`,
		"fallback": "uix-sharp:measuring-tape",
	});
}

export default Component;
