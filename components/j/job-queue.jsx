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
		"content": `<style>.k1qqxhvxl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.25 3.5h7A1.75 1.75 0 0 1 21 5.25A1.75 1.75 0 0 1 19.25 7h-7a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75m0 6.75h7A1.75 1.75 0 0 1 21 12a1.75 1.75 0 0 1-1.75 1.75h-7A1.75 1.75 0 0 1 10.5 12a1.75 1.75 0 0 1 1.75-1.75m0 6.75h7A1.75 1.75 0 0 1 21 18.75a1.75 1.75 0 0 1-1.75 1.75h-7a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 12.25 17M3 5.25h4.5M5.25 3L7.5 5.25L5.25 7.5");
}
</style><path class="k1qqxhvxl"/>`,
		"fallback": "uix:job-queue",
	});
}

export default Component;
