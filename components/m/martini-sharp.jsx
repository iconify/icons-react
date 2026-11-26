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
		"content": `<style>.czw2syb_u {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 3L22 3L12 13.7909ZM5.7078 7L18.2922 7M12 13.7909L12 21M5 21L6 21L18 21L19 21");
}
</style><path class="czw2syb_u"/>`,
		"fallback": "keyline-icons:martini-sharp",
	});
}

export default Component;
