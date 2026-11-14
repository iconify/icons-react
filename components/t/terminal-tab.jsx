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
		"content": `<style>.e2f6orbov {
  d: path("M2.5 7.5h19V21h-19Zm2.5 0V5a1.5 1.5 0 0 1 1.5-1.5h6A1.5 1.5 0 0 1 14 5v2.5");
}

.j1kxoubdj {
  d: path("m6.5 11.75l2.75 2.75l-2.75 2.75m5 0H16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e2f6orbov"/><path class="j1kxoubdj"/></g>`,
		"fallback": "uix-sharp:terminal-tab",
	});
}

export default Component;
