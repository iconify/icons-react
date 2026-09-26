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
		"content": `<style>.m-irwm9cw {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 14.5L2 18.5L2 22L5.5 22L7 20.5L9.5 20.5L9.5 18L12 18L12 15.5L13.5 14L22 14L22 2L10 2L10 10.5ZM14.7071 9.2929L17.2929 6.7071");
}
</style><path class="m-irwm9cw"/>`,
		"fallback": "keyline-icons:key-square-sharp",
	});
}

export default Component;
