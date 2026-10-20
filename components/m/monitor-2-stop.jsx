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
		"content": `<style>.w1q8g5bza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 3L19 3C20.6569 3 22 4.3431 22 6L22 14C22 15.6569 20.6569 17 19 17L5 17C3.3431 17 2 15.6569 2 14L2 6C2 4.3431 3.3431 3 5 3ZM12 17L12 21M8 21L16 21M10 7L14 7C14.5523 7 15 7.4477 15 8L15 12C15 12.5523 14.5523 13 14 13L10 13C9.4477 13 9 12.5523 9 12L9 8C9 7.4477 9.4477 7 10 7Z");
}
</style><path class="w1q8g5bza"/>`,
		"fallback": "keyline-icons:monitor-2-stop",
	});
}

export default Component;
