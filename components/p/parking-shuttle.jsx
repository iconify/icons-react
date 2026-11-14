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
		"content": `<style>.aaq2io8dk {
  d: path("M5.5 17a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm10 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm0-12v6h6M6 13V7.75h1.75a1.75 1.75 0 0 1 0 3.5H6");
}

.tvi0xt4dm {
  d: path("M2.5 16.5V7a2 2 0 0 1 2-2h11l6 6v5.5h-1.75a2.75 2.75 0 0 0-5.5 0h-4.5a2.75 2.75 0 0 0-5.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tvi0xt4dm"/><path class="aaq2io8dk"/></g>`,
		"fallback": "uix-sharp:parking-shuttle",
	});
}

export default Component;
