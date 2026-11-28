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
		"content": `<style>.lsiqtfidc {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 3C10.6569 3 12 4.3431 12 6C12 7.6569 10.6569 9 9 9C7.3432 9 6 7.6569 6 6C6 4.3431 7.3432 3 9 3ZM11 21L2 21L2 19C2 15.6863 4.6863 13 8 13L11 13M14 13L22 13L22 18L20 18L18 20.5L18 18L14 18Z");
}
</style><path class="lsiqtfidc"/>`,
		"fallback": "keyline-icons:user-message-sharp",
	});
}

export default Component;
