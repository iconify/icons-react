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
		"content": `<style>.bfbpohbjg {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 2L18 2L18 9L2 9L2 2ZM11 16L15 16L15 22L11 22L11 16ZM18 5.5L22 5.5L22 13L13 13L13 16");
}
</style><path class="bfbpohbjg"/>`,
		"fallback": "keyline-icons:paint-roller-sharp",
	});
}

export default Component;
