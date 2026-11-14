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
		"content": `<style>.hp1u_jbon {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20L9 9l4 6l3-4l5.5 9ZM9 9V4.5m0 0l4 1.25L9 7Z");
}
</style><path class="hp1u_jbon"/>`,
		"fallback": "uix-sharp:travel-adventure-cover",
	});
}

export default Component;
