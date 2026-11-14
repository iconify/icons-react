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
		"content": `<style>.db2wmhbwk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 21l8-8m0 0c0-4 3.5-7.5 7.5-7.5c0 4-3.5 7.5-7.5 7.5Zm-4 4c-3-2-4.5-6.5-3.5-10.5C9 8.5 10.5 13 9 17Z");
}
</style><path class="db2wmhbwk"/>`,
		"fallback": "uix-sharp:leaf-sprig-pair",
	});
}

export default Component;
