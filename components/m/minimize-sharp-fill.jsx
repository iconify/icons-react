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
		"content": `<style>.euzbedc8b {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 2L9 9L2 9M15 2L15 9L22 9M22 15L15 15L15 22M2 15L9 15L9 22");
}
</style><path class="euzbedc8b"/>`,
		"fallback": "keyline-icons:minimize-sharp-fill",
	});
}

export default Component;
