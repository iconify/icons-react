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
		"content": `<style>.m_863oo0q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.935 5.11l8.803-1.871l2.391 11.249l-8.803 1.871Zm-.543 11.873l14.672-3.119M3.5 19.75L20 9");
}
</style><path class="m_863oo0q"/>`,
		"fallback": "uix-sharp:magician-hat",
	});
}

export default Component;
