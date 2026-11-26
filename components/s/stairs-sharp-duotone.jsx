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
		"content": `<style>.ifbn9575c {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 21L2 15L8 15L8 9L14 9L14 3L22 3L22 21Z");
}
</style><path class="ifbn9575c"/>`,
		"fallback": "keyline-icons:stairs-sharp-duotone",
	});
}

export default Component;
