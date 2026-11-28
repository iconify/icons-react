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
		"content": `<style>.wcum-9h5w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 13H13C16.3137 13 19 15.6863 19 19V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V19C5 15.6863 7.68629 13 11 13ZM12 3C13.6569 3 15 4.34315 15 6C15 7.65685 13.6569 9 12 9C10.3431 9 9 7.65685 9 6C9 4.34315 10.3431 3 12 3Z");
}
</style><path class="wcum-9h5w"/>`,
		"fallback": "keyline-icons:user",
	});
}

export default Component;
