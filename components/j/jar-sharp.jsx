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
		"content": `<style>.pzw9ypbmy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 2.75h11.5v2.5H6.25zm.75 5h10v.5l1.98.7l.02 2.1v10.2H5v-10.2l.02-2.1L7 8.25Zm1.5 6h7m-7 3H13");
}
</style><path class="pzw9ypbmy"/>`,
		"fallback": "iconoven:jar-sharp",
	});
}

export default Component;
