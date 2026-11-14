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
		"content": `<style>.m34ip4bzi {
  d: path("M8 13.5h13.5l-1 1.75l1 1.75l-1 1.75l1 1.75H8M6.25 8a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM11 17h6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x7en6x1ng {
  d: path("M2.5 8a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}
</style><g class="ulnmmdpxh"><path class="x7en6x1ng"/><path class="m34ip4bzi"/></g>`,
		"fallback": "uix-sharp:till-roll",
	});
}

export default Component;
