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
		"content": `<style>.mwcqi7bvm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10 2.5l5 7h-2l4 7H3l4-7H5Zm0 14v5m8-15l2.5 2m-1.5 3l2.5 2m-2 5l2 2");
}
</style><path class="mwcqi7bvm"/>`,
		"fallback": "uix-sharp:tree-shaking",
	});
}

export default Component;
