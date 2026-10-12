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
		"content": `<style>.bl-gm25ty {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.25h16.25v9.5H14.4l-1.6 2.3l-.8 1.249l-.8-1.249l-1.6-2.3H2.75v-9.5zM7.25 8h9.5M9 18h6v2.5H9z");
}
</style><path class="bl-gm25ty"/>`,
		"fallback": "iconoven:tooltip-sharp",
	});
}

export default Component;
