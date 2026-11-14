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
		"content": `<style>.pudwdrlxr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.534 2.5h8.932a1.5 1.5 0 0 1 1.402.966l2.857 7.5A1.5 1.5 0 0 1 19.323 13H4.677a1.5 1.5 0 0 1-1.402-2.034l2.857-7.5A1.5 1.5 0 0 1 7.534 2.5m7.966 19q0-3-1.5-5.25m4.25 5.25v-5.75M21 21.5q0-3 1-5.25M4.5 7.75h15M12 2.5V13");
}
</style><path class="pudwdrlxr"/>`,
		"fallback": "uix:tennis-court-grass",
	});
}

export default Component;
