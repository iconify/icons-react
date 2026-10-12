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
		"content": `<style>.uz-tk2b2r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 21.25C4.5 17 5 13 4.25 8h6c-.75 5-.25 9 1.5 13.25Zm2-16a1.75 1.75 0 0 1 3-1.25a1.75 1.75 0 0 1 3.25.75m4.25 16.5v-3.5a3 3 0 0 1 6 0v3.5Z");
}
</style><path class="uz-tk2b2r"/>`,
		"fallback": "iconoven:nuclear-plant-sharp",
	});
}

export default Component;
