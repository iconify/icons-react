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
		"content": `<style>.je-m1008f {
  fill: currentColor;
  d: path("M9 12.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x-gfdobqi {
  d: path("m3 6l6-2.5L15 6l6-2.5V18l-6 2.5L9 18l-6 2.5Zm3.5 6.5h11");
}
</style><g class="ulnmmdpxh"><path class="x-gfdobqi"/><path class="je-m1008f"/></g>`,
		"fallback": "uix-sharp:map-time-slider",
	});
}

export default Component;
