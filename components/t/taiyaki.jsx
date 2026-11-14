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
		"content": `<style>.v2hbxcooz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12c2-4 6.5-5 11-3.5c2 .5 3 1.5 3 3.5s-1 3-3 3.5C9.5 17 5 16 3 12Zm14 0l4.5-3.5v7ZM7 11h.01");
}
</style><path class="v2hbxcooz"/>`,
		"fallback": "uix-sharp:taiyaki",
	});
}

export default Component;
