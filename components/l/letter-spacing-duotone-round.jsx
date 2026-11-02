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
		"content": `<style>.cwgthihjf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 10V7a3 3 0 0 1 6 0v3M9 8h6M3 17h18M6 14l-3 3l3 3m12 0l3-3l-3-3");
}
</style><path class="cwgthihjf"/>`,
		"fallback": "coolicons:letter-spacing-duotone-round",
	});
}

export default Component;
