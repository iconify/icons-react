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
		"content": `<style>.i0k0d_6sp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9 3l3 3.5L15 3l5.5 2.5l1 5l-3.5 1V21H6v-9.5l-3.5-1l1-5Zm0 0h6");
}
</style><path class="i0k0d_6sp"/>`,
		"fallback": "uix-sharp:replica-shirt",
	});
}

export default Component;
