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
		"content": `<style>.fj5a41bwl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19v9h-19ZM6 7h12M3 16.5h8.5m6.5-1.75v3.5M18 21h.01");
}
</style><path class="fj5a41bwl"/>`,
		"fallback": "uix-sharp:news-feed-alert",
	});
}

export default Component;
