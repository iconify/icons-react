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
		"content": `<style>.eh-s0db6r {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 18L4 21L22 21L22 3L4 3L4 6M13 21L13 3M9 12L2 12M5.2929 8.7071L2 12L5.2929 15.2929");
}
</style><path class="eh-s0db6r"/>`,
		"fallback": "keyline-icons:table-columns-move-before-sharp",
	});
}

export default Component;
