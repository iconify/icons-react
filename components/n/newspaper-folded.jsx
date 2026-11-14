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
		"content": `<style>.fuy7azbxi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 19V5.5A2.5 2.5 0 0 1 9.5 3h9A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5H5a2 2 0 0 1-2-2v-9h4m3.5-2.5h7m-7 4h7m-7 4h4");
}
</style><path class="fuy7azbxi"/>`,
		"fallback": "uix-sharp:newspaper-folded",
	});
}

export default Component;
