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
		"content": `<style>.mjwpbz9ri {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3.5h11v3h-11Zm2 3l-2 14m9-14l2 14M7.5 15h9");
}
</style><path class="mjwpbz9ri"/>`,
		"fallback": "uix-sharp:seat-perch",
	});
}

export default Component;
