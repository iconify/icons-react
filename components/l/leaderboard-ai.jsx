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
		"content": `<style>.x0kja9b6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.25v-5q0-1 1-1H7.5q1 0 1-1v-2q0-1 1-1h5q1 0 1 1v4q0 1 1 1h3.75q1 0 1 1v3q0 1-1 1H3.75q-1 0-1-1M12 13.5V18m0-15.25q.33 2.42 2.75 2.75q-2.42.33-2.75 2.75q-.33-2.42-2.75-2.75q2.42-.33 2.75-2.75");
}
</style><path class="x0kja9b6v"/>`,
		"fallback": "iconoven:leaderboard-ai",
	});
}

export default Component;
