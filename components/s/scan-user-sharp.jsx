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
		"content": `<style>.q1qtuob-u {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 9L3 3L9 3M15 3L21 3L21 9M21 15L21 21L15 21M9 21L3 21L3 15M13.5 7.5C13.5 8.3284 12.8284 9 12 9C11.1716 9 10.5 8.3284 10.5 7.5C10.5 6.6716 11.1716 6 12 6C12.8284 6 13.5 6.6716 13.5 7.5ZM8 13L16 13L16 17L8 17Z");
}
</style><path class="q1qtuob-u"/>`,
		"fallback": "keyline-icons:scan-user-sharp",
	});
}

export default Component;
