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
		"content": `<style>.fesv-mbxx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4.5h11l-1 13H14L13 10h-2l-1 7.5H7.5ZM12 10v11.5m-3.5 0h7m-9-14h11");
}
</style><path class="fesv-mbxx"/>`,
		"fallback": "uix-sharp:mannequin-legs",
	});
}

export default Component;
