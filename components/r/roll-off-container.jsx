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
		"content": `<style>.p-nuazg-w {
  d: path("M2.5 6h14l4 4v4.5h-18Z");
}

.pndd-qbss {
  d: path("m18.5 8l2-2V3.5h-1.75M2.5 17.5h18M4.25 19.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm11 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p-nuazg-w"/><path class="pndd-qbss"/></g>`,
		"fallback": "uix-sharp:roll-off-container",
	});
}

export default Component;
