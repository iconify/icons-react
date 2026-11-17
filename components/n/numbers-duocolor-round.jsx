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
		"content": `<style>.p6bsg_3na {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 9l2-2v10M9 7h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2m4-10h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1m0 0h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2");
}
</style><path class="p6bsg_3na"/>`,
		"fallback": "coolicons:numbers-duocolor-round",
	});
}

export default Component;
