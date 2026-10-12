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
		"content": `<style>.svnavbcle {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 8.75h3.5v10H4zm3.5 5h8v-3m-4.25-3.5h8.5L18.5 10l-.179.7l-.721.05h-4.2l-.721-.05l-.179-.7Zm1.75-3l-.5-1.5m5.5 1.5l.5-1.5");
}
</style><path class="svnavbcle"/>`,
		"fallback": "iconoven:wall-sconce-sharp",
	});
}

export default Component;
