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
		"content": `<style>.w9fmnrbfe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m5 17l2-6l-1-2l-2 1l-1-2l2-4a6 6 0 0 1 6 6h6l2 7m-4 2l-1-4h-4l-1 4m8-9h1a3 3 0 0 0 3-3M3 15a11.402 11.402 0 0 0 18 0");
}
</style><path class="w9fmnrbfe"/>`,
		"fallback": "coolicons:rocking-horse-round",
	});
}

export default Component;
