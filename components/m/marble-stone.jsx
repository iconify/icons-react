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
		"content": `<style>.kh4in4bun {
  d: path("m5 5l12-1l4.5 4.5l-1 9l-5 2.5L4 19l-1.5-8Z");
}

.qjx50y1aw {
  d: path("M2.5 11c3.5-2 5.5 2.5 9 1c2.5-1 4.5-4.5 7.75-5.75M9.75 19.5C11 16.5 13.5 17 16 15c1.5-1.25 3-1.5 5-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kh4in4bun"/><path class="qjx50y1aw"/></g>`,
		"fallback": "uix-sharp:marble-stone",
	});
}

export default Component;
