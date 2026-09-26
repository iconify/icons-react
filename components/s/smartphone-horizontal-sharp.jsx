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
		"content": `<style>.rusgjrbal {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 9.5L6 14.5M2 5L2 19L22 19L22 5L2 5Z");
}
</style><path class="rusgjrbal"/>`,
		"fallback": "keyline-icons:smartphone-horizontal-sharp",
	});
}

export default Component;
