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
		"content": `<style>.hxs67gbgj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5h6v6H9Zm-6.5 13h6v6h-6Zm13 0h6v6h-6Zm-3.5-7V12m-6.5 3.5V12h13v3.5");
}
</style><path class="hxs67gbgj"/>`,
		"fallback": "uix-sharp:process-tree",
	});
}

export default Component;
