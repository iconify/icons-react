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
		"content": `<style>.l6jouqbxw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h11v7.5H3Zm14 0h4v7.5h-4ZM3 13.5h4V21H3Zm7 0h11V21H10Z");
}
</style><path class="l6jouqbxw"/>`,
		"fallback": "uix-sharp:layout-bento",
	});
}

export default Component;
