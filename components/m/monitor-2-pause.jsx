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
		"content": `<style>.z-0dd5yff {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 3L19 3C20.6569 3 22 4.3431 22 6L22 14C22 15.6569 20.6569 17 19 17L5 17C3.3431 17 2 15.6569 2 14L2 6C2 4.3431 3.3431 3 5 3ZM12 17L12 21M8 21L16 21M10 7L10 13M14 7L14 13");
}
</style><path class="z-0dd5yff"/>`,
		"fallback": "keyline-icons:monitor-2-pause",
	});
}

export default Component;
