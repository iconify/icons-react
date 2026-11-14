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
		"content": `<style>.vq3a6sbwo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.625 3h.75A2.625 2.625 0 0 1 10 5.625v3.75A2.625 2.625 0 0 1 7.375 12h-.75A2.625 2.625 0 0 1 4 9.375v-3.75A2.625 2.625 0 0 1 6.625 3M4 12h16c0 4-3 6-6 6.5l1 3H8L9 18c-3-1-5-3-5-6m8.5 0l.5-2.5h5.5l1 2.5");
}
</style><path class="vq3a6sbwo"/>`,
		"fallback": "uix:toilet-seat-kids",
	});
}

export default Component;
