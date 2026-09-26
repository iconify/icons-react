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
		"content": `<style>.l8dx6q3cz {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 14L13 14C16.3137 14 19 16.6863 19 20L19 21L5 21L5 20C5 16.6863 7.6863 14 11 14ZM12 4C13.6569 4 15 5.3431 15 7C15 8.6569 13.6569 10 12 10C10.3431 10 9 8.6569 9 7C9 5.3431 10.3431 4 12 4Z");
}
</style><path class="l8dx6q3cz"/>`,
		"fallback": "keyline-icons:user-sharp",
	});
}

export default Component;
