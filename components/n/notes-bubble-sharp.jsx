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
		"content": `<style>.kbtzidb9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4h15v13H10l-4 4v-4H3V4zm1 5h10M7 13h10");
}
</style><path class="kbtzidb9y"/>`,
		"fallback": "iconoven:notes-bubble-sharp",
	});
}

export default Component;
