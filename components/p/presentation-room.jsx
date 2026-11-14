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
		"content": `<style>.eo0pwoifc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.75h16M8.75 7h6.5v14.5h-6.5ZM3.5 9H6v3H3.5Zm0 6H6v3H3.5ZM18 9h2.5v3H18Zm0 6h2.5v3H18Z");
}
</style><path class="eo0pwoifc"/>`,
		"fallback": "uix-sharp:presentation-room",
	});
}

export default Component;
