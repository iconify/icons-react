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
		"content": `<style>.m23tc_fee {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 14L16 5.385L8 2.0013L8 15L6 15L6 22L18 22L18 15L16 15ZM16 11L8 11");
}
</style><path class="m23tc_fee"/>`,
		"fallback": "keyline-icons:lipstick-sharp",
	});
}

export default Component;
