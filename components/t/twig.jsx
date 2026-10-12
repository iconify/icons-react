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
		"content": `<style>.rzpfj0b3h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 20.25L17 7m-8 8l-.75-5.25m5.25.75l4.75.75M17 7c-.25-2 .75-3.5 2.75-4.25c.5 2-.75 3.75-2.75 4.25");
}
</style><path class="rzpfj0b3h"/>`,
		"fallback": "iconoven:twig",
	});
}

export default Component;
