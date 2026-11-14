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
		"content": `<style>.e7fumclkw {
  d: path("M6.5 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM8 7.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm5-.75a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM16.5 10a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.keqk6qb-y {
  d: path("M12 2.5a9.5 9.5 0 0 0 0 19c1.5 0 2.25-1 2-2.25s-.5-2 .5-2.75c.75-.5 1.5-.5 2.5-.5h1a3.5 3.5 0 0 0 3.5-3.5c0-5.5-4.25-10-9.5-10Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="keqk6qb-y"/><path class="e7fumclkw"/></g>`,
		"fallback": "uix-sharp:theme-palette",
	});
}

export default Component;
