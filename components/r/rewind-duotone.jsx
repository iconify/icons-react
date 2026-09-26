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
		"content": `<style>.tuqd9ub8d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 16.495037C22 17.809976 20.428429 18.488512 19.47137 17.586788L14.314246 12.727834C13.89525 12.333063 13.89525 11.666937 14.314246 11.272166L19.47137 6.413212C20.428429 5.511488 22 6.190024 22 7.504963ZM10 16.495037C10 17.809976 8.428429 18.488512 7.47137 17.586788L2.314246 12.727834C1.89525 12.333063 1.89525 11.666937 2.314246 11.272166L7.47137 6.413212C8.428429 5.511488 10 6.190024 10 7.504963Z");
}
</style><path class="tuqd9ub8d"/>`,
		"fallback": "keyline-icons:rewind-duotone",
	});
}

export default Component;
