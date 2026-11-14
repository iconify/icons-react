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
		"content": `<style>.u1u883vye {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.75 11h.5A1.75 1.75 0 0 1 14 12.75v7a1.75 1.75 0 0 1-1.75 1.75h-.5A1.75 1.75 0 0 1 10 19.75v-7A1.75 1.75 0 0 1 11.75 11M12 3q3.75 3.75 1.5 6h-3Q8.25 6.75 12 3M6 5l1.5 1.5M18 5l-1.5 1.5M5.5 10H7m11.5 0H17");
}
</style><path class="u1u883vye"/>`,
		"fallback": "uix:signal-flare",
	});
}

export default Component;
