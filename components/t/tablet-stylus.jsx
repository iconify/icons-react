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
		"content": `<style>.gyu6zn5bz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h13v19h-13Zm4.5 16h4M18.5 4h2v12l-1 2.5l-1-2.5Z");
}
</style><path class="gyu6zn5bz"/>`,
		"fallback": "uix-sharp:tablet-stylus",
	});
}

export default Component;
