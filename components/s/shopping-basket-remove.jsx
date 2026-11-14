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
		"content": `<style>.x-745vbue {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5h19l-.5 2.75h-8.75v8.25H4.5Zm4.5 0l3-6m7 6l-3-6M8 13v4m7 1h6");
}
</style><path class="x-745vbue"/>`,
		"fallback": "uix-sharp:shopping-basket-remove",
	});
}

export default Component;
