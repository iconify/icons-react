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
		"content": `<style>.gmtrdxdhg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20H3l1.75-7.5L6.5 20h11l1.75-7.5L21 20h.5M8.75 5h6.5A1.75 1.75 0 0 1 17 6.75v2a1.75 1.75 0 0 1-1.75 1.75h-6.5A1.75 1.75 0 0 1 7 8.75v-2A1.75 1.75 0 0 1 8.75 5M12 10.5V20m-3.75-9.5l2-5.5m3.5 0l2 5.5");
}
</style><path class="gmtrdxdhg"/>`,
		"fallback": "uix:road-works",
	});
}

export default Component;
