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
		"content": `<style>.y_frzhb_z {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 16L2 16L2 2L20 2L20 7M18 10C20.2091 10 22 11.7909 22 14L22 18C22 20.2091 20.2091 22 18 22C15.7909 22 14 20.2091 14 18L14 14C14 11.7909 15.7909 10 18 10ZM18 13L18 16");
}
</style><path class="y_frzhb_z"/>`,
		"fallback": "keyline-icons:touchpad-mouse-sharp",
	});
}

export default Component;
