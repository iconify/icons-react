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
		"content": `<style>.bxzw1lb7c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 20V4M5 7l3-3l3 3m5-3v16m-3-3l3 3l3-3");
}
</style><path class="bxzw1lb7c"/>`,
		"fallback": "uix-sharp:sort-arrows",
	});
}

export default Component;
