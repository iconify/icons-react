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
		"content": `<style>.apr2eo5qt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21a6 6 0 1 1 12 0");
}
</style><path class="apr2eo5qt"/>`,
		"fallback": "coolicons:user-round",
	});
}

export default Component;
