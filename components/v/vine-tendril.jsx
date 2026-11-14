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
		"content": `<style>.o42i3wbot {
  d: path("M3.5 21.5C3.5 13 8 4 14 4a5.5 5.5 0 0 1 0 11a3.5 3.5 0 0 1 0-7a2 2 0 0 1 0 4");
}

.qdzi1s4_k {
  d: path("M4 16.5c2-2 4.5-1.5 6 1c-2.5 1.5-4.5 1-6-1Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o42i3wbot"/><path class="qdzi1s4_k"/></g>`,
		"fallback": "uix-sharp:vine-tendril",
	});
}

export default Component;
