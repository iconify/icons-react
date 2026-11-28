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
		"content": `<style>.dhygdk_at {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 3C10.6569 3 12 4.3431 12 6C12 7.6569 10.6569 9 9 9C7.3432 9 6 7.6569 6 6C6 4.3431 7.3432 3 9 3ZM11 21L3 21C2.4477 21 2 20.5523 2 20V19C2 15.6863 4.6863 13 8 13L11 13M15 13L21 13M15 17L22 17M15 21L19 21");
}
</style><path class="dhygdk_at"/>`,
		"fallback": "keyline-icons:user-list",
	});
}

export default Component;
