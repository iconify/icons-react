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
		"content": `<style>.b8qs87b5t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 20.5l13-13c1-1 2-2.5 2-4c-1.5 0-3 1-4 2l-13 13a1.5 1.5 0 0 0 2 2Zm13.75-6A2.25 2.25 0 1 1 17 16.75m-2.25 4.5l3-3");
}
</style><path class="b8qs87b5t"/>`,
		"fallback": "uix-sharp:ski-repair",
	});
}

export default Component;
