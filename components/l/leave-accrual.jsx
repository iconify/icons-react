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
		"content": `<style>.ss1l4ac3q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5V11M8 21.5h8M12 16q-3.5.75-7-3q3.75-1 7 3m0-2q3.5.75 7-3.5q-3.75-1-7 3.5M2.25 7.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m2.5 0h.01M16.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M19 5h.01");
}
</style><path class="ss1l4ac3q"/>`,
		"fallback": "uix:leave-accrual",
	});
}

export default Component;
