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
		"content": `<style>.t7x-z5m1d {
  d: path("m12 7l-3.75 6h7.5Zm0 6v2.5");
}

.u4c4gab6p {
  d: path("M6 15.5a7.5 7.5 0 1 1 12 0m-13.5 0h15L21 21H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u4c4gab6p"/><path class="t7x-z5m1d"/></g>`,
		"fallback": "uix-sharp:souvenir",
	});
}

export default Component;
