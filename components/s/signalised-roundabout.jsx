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
		"content": `<style>.daa1d4blq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 8.25a5.5 5.5 0 0 1 3.75 6.25m1.5-1.25l-1.5 1.25l-1.25-1.5m-.75 4.75a5.5 5.5 0 0 1-7 0m.25 2l-.25-2l1.75-.25m-3.75-3a5.5 5.5 0 0 1 3.75-6.25m-2-.75l2 .75L5.5 10m14-7.5za2 2 0 0 1 2 2v7a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2m0 3h.01m-.01 2.75h.01M19.5 11h.01m-.01 2.5v8");
}
</style><path class="daa1d4blq"/>`,
		"fallback": "uix:signalised-roundabout",
	});
}

export default Component;
