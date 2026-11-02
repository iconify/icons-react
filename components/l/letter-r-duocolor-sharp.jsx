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
		"content": `<style>.qj8wxne4a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 20V4h6a4 4 0 1 1 0 8H7m6 0l4 8");
}
</style><path class="qj8wxne4a"/>`,
		"fallback": "coolicons:letter-r-duocolor-sharp",
	});
}

export default Component;
