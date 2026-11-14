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
		"content": `<style>.eo4k77bbe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 14.5l15.5-11l-2.5 11Zm-1 3h18L18.5 21h-13Zm9-3v3");
}
</style><path class="eo4k77bbe"/>`,
		"fallback": "uix-sharp:lateen-sail",
	});
}

export default Component;
