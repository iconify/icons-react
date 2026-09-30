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
		"content": `<style>.g4sg55u0t {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 7L6.5 3L12 5L17.5 3L14 7L15.1978 7.3422C18.6322 8.3235 21 11.4626 21 15.0344L21 21L3 21L3 15.0344C3 11.4626 5.3678 8.3235 8.8022 7.3422L10 7ZM10 7L14 7M8.7071 13.7071L11 16L15.2929 11.7071");
}
</style><path class="g4sg55u0t"/>`,
		"fallback": "keyline-icons:money-bag-check-sharp",
	});
}

export default Component;
