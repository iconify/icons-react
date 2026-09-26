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
		"content": `<style>.xm_q1n7-m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6C3 4.343146 4.343146 3 6 3L18 3C19.656854 3 21 4.343146 21 6L21 18C21 19.656854 19.656854 21 18 21L6 21C4.343146 21 3 19.656854 3 18ZM9 8V16M15 8V16");
}
</style><path class="xm_q1n7-m"/>`,
		"fallback": "keyline-icons:square-pause",
	});
}

export default Component;
