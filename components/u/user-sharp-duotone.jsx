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
		"content": `<style>.x8vaoj-sm {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 13L13 13C16.3137 13 19 15.6863 19 19L19 21L5 21L5 19C5 15.6863 7.6863 13 11 13ZM12 3C13.6569 3 15 4.3431 15 6C15 7.6569 13.6569 9 12 9C10.3431 9 9 7.6569 9 6C9 4.3431 10.3431 3 12 3Z");
}
</style><path class="x8vaoj-sm"/>`,
		"fallback": "keyline-icons:user-sharp-duotone",
	});
}

export default Component;
