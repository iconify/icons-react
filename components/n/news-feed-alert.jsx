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
		"content": `<style>.lc0rp9b5b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5h12A3.5 3.5 0 0 1 21.5 6v2a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 8V6A3.5 3.5 0 0 1 6 2.5M6 7h12M3 16.5h8.5m6.5-1.75v3.5M18 21h.01");
}
</style><path class="lc0rp9b5b"/>`,
		"fallback": "uix:news-feed-alert",
	});
}

export default Component;
