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
		"content": `<style>.vk6m8o0mv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 20.5v-4H6.5A2.5 2.5 0 0 1 4 14v-4a1.5 1.5 0 0 1 3 0v3.5h3V6a2 2 0 0 1 4 0v5.5h3V8a1.5 1.5 0 0 1 3 0v4a2.5 2.5 0 0 1-2.5 2.5H14v6m-11 0h18");
}
</style><path class="vk6m8o0mv"/>`,
		"fallback": "uix-sharp:pin-desert",
	});
}

export default Component;
