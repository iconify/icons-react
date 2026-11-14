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
		"content": `<style>.u8bvkb28l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h19v11h-19ZM6.75 12h.01m3.49 0h.01m3.49 0h.01m3.49 0h.01");
}
</style><path class="u8bvkb28l"/>`,
		"fallback": "uix-sharp:pin-code",
	});
}

export default Component;
