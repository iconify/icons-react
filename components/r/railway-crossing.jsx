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
		"content": `<style>.n5338bb0y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 3l8 7m0-7l-8 7m4-3.5v15M8 14h13.5v3H8Z");
}
</style><path class="n5338bb0y"/>`,
		"fallback": "uix-sharp:railway-crossing",
	});
}

export default Component;
