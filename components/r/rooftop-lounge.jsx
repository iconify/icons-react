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
		"content": `<style>.aj4c5qb7b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 16.5h14a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 20v-2A1.5 1.5 0 0 1 5 16.5m-2.5 0h19M8.94 2.5h6.12a1.5 1.5 0 0 1 1.099 2.521l-3.06 3.295a1.5 1.5 0 0 1-2.198 0l-3.06-3.295A1.5 1.5 0 0 1 8.94 2.5M12 5h.01M12 9.5v7m-3 0h6M7 19h.01M12 19h.01M17 19h.01");
}
</style><path class="aj4c5qb7b"/>`,
		"fallback": "uix:rooftop-lounge",
	});
}

export default Component;
