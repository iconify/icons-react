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
		"content": `<style>.cmzieg02d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 4C7.6569 4 9 5.3431 9 7C9 8.6569 7.6569 10 6 10C4.3431 10 3 8.6569 3 7C3 5.3431 4.3431 4 6 4ZM13 7L21 7M18 4L21 7L18 10M16 14L20 14C20.5523 14 21 14.4477 21 15L21 19C21 19.5523 20.5523 20 20 20L16 20C15.4477 20 15 19.5523 15 19L15 15C15 14.4477 15.4477 14 16 14ZM11 17L3 17M6 14L3 17L6 20");
}
</style><path class="cmzieg02d"/>`,
		"fallback": "keyline-icons:replace",
	});
}

export default Component;
