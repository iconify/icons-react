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
		"content": `<style>.uyevnvb8o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h4v4h-4Zm15 0h4v4h-4Zm-15 15h4v4h-4Zm15 0h4v4h-4Zm-9-13h7m-7 15h7m-11-11v7m15-7v7");
}
</style><path class="uyevnvb8o"/>`,
		"fallback": "uix-sharp:transform",
	});
}

export default Component;
