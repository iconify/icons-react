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
		"content": `<style>.ph92khj4u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 3h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8m8-18h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2");
}
</style><path class="ph92khj4u"/>`,
		"fallback": "coolicons:text-cursor-duocolor",
	});
}

export default Component;
