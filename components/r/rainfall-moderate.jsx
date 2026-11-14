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
		"content": `<style>.d2u6d4rwn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4s-3.5 5-3.5 8a3.5 3.5 0 0 0 7 0C10.5 9 7 4 7 4Zm10 2s-3.5 5-3.5 8a3.5 3.5 0 0 0 7 0c0-3-3.5-8-3.5-8ZM5 21h14");
}
</style><path class="d2u6d4rwn"/>`,
		"fallback": "uix-sharp:rainfall-moderate",
	});
}

export default Component;
