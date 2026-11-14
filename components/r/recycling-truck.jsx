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
		"content": `<style>.ad7b0ubdi {
  d: path("M2.5 4H16v13.25H2.5ZM16 8h2.5l3 3.5v5.75H16");
}

.ca4hi0bcu {
  d: path("M4.5 19.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm11.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM10.25 7a3.5 3.5 0 0 1 2 3.5m1-1l-1 1l-1-1m-.5 3.75a3.5 3.5 0 0 1-4 0m.5 1.25l-.5-1.25l1.5-.5m-3-2.25a3.5 3.5 0 0 1 2-3.5m-1.5-.25l1.5.25l-.5 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ad7b0ubdi"/><path class="ca4hi0bcu"/></g>`,
		"fallback": "uix-sharp:recycling-truck",
	});
}

export default Component;
