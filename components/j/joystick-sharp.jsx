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
		"content": `<style>.r08b_4qfy {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14.781 9.74C15.154 9.91 15.566 10 16 10C17.657 10 19 8.66 19 7C19 5.34 17.657 4 16 4C14.343 4 13 5.34 13 7C13 8.22 13.732 9.27 14.781 9.74ZM14.781 9.74L12.889 14M3 14H21V20H3V14Z");
}
</style><path class="r08b_4qfy"/>`,
		"fallback": "keyline-icons:joystick-sharp",
	});
}

export default Component;
