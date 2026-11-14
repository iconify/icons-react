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
		"content": `<style>.qx2cinioz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5V16H8v-4.5h8V14h5.5v7.5ZM8 16v5.5m8-7.5v7.5M12.75 2.433l1.315.759a1.5 1.5 0 0 1 .75 1.299v1.518a1.5 1.5 0 0 1-.75 1.299l-1.315.759a1.5 1.5 0 0 1-1.5 0l-1.315-.759a1.5 1.5 0 0 1-.75-1.299V4.491a1.5 1.5 0 0 1 .75-1.299l1.315-.759a1.5 1.5 0 0 1 1.5 0");
}
</style><path class="qx2cinioz"/>`,
		"fallback": "uix:leaderboard-web3",
	});
}

export default Component;
