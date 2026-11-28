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
		"content": `<style>.s8iig8qqv {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 9L3 3L9 3M15 3L21 3L21 9M9 21L3 21L3 15M7.9627 7.1063L15.0357 11L7.9627 14.8938ZM18 14L18 21M14.7071 17.7071L18 21L21.2929 17.7071");
}
</style><path class="s8iig8qqv"/>`,
		"fallback": "keyline-icons:video-frame-sharp",
	});
}

export default Component;
