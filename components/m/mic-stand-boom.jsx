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
		"content": `<style>.ycr4b8bhq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 20l4-4.5l4 4.5m-4-4.5V9m-3 1.5L18.25 4M16.5 4H20v6h-3.5Z");
}
</style><path class="ycr4b8bhq"/>`,
		"fallback": "uix-sharp:mic-stand-boom",
	});
}

export default Component;
