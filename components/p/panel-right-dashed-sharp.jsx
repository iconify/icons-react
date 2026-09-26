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
		"content": `<style>.lfwc7mqrl {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 3L21 3L21 21L15 21L15 3ZM7 3L3 3L3 7M3 17L3 21L7 21M9 3L12 3M9 21L12 21M3 9.5L3 14.5");
}
</style><path class="lfwc7mqrl"/>`,
		"fallback": "keyline-icons:panel-right-dashed-sharp",
	});
}

export default Component;
