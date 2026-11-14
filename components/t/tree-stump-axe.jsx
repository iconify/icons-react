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
		"content": `<style>.h-csf7bdf {
  d: path("M3.5 13a6.5 2 0 1 0 13 0a6.5 2 0 1 0-13 0Z");
}

.klwtho-wi {
  d: path("M3.5 13v6l-1 2h15l-1-2v-6m-9-1.75L9.5 7h2l1 4.25M11.5 7l9-4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h-csf7bdf"/><path class="klwtho-wi"/></g>`,
		"fallback": "uix-sharp:tree-stump-axe",
	});
}

export default Component;
