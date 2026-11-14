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
		"content": `<style>.swn7cpbor {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v13h-19ZM7 16l-2 5.5M17 16l2 5.5M8 13v-2.5m4 2.5V8.5m4 4.5V6");
}
</style><path class="swn7cpbor"/>`,
		"fallback": "uix-sharp:presentation-growth",
	});
}

export default Component;
