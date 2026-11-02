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
		"content": `<style>.yxt7g3rhh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 14a1 1 0 1 0 2 0a1 1 0 0 0-2 0m12-4a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-6 2a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="yxt7g3rhh"/>`,
		"fallback": "coolicons:loading-round",
	});
}

export default Component;
