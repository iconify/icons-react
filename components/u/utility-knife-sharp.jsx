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
		"content": `<style>.s8vft3vck {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9 9.5l11.25-.75h1v8.5h-1L9 16.5Zm0 1.25H6.25l-3.5 4H9ZM12 13h6.5");
}
</style><path class="s8vft3vck"/>`,
		"fallback": "iconoven:utility-knife-sharp",
	});
}

export default Component;
