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
		"content": `<style>.i82rs5bju {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="i82rs5bju"/>`,
		"fallback": "coolicons:more-vertical",
	});
}

export default Component;
