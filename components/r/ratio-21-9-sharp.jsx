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
		"content": `<style>.qynlc9b1p {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 8L22 8L22 16L2 16L2 8Z");
}
</style><path class="qynlc9b1p"/>`,
		"fallback": "keyline-icons:ratio-21-9-sharp",
	});
}

export default Component;
