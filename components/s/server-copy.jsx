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
		"content": `<style>.yk_bzgd1z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 3.5h8.75A2.625 2.625 0 0 1 16.5 6.125v1.75a2.625 2.625 0 0 1-2.625 2.625h-8.75A2.625 2.625 0 0 1 2.5 7.875v-1.75A2.625 2.625 0 0 1 5.125 3.5m5 10h8.75a2.625 2.625 0 0 1 2.625 2.625v1.75a2.625 2.625 0 0 1-2.625 2.625h-8.75A2.625 2.625 0 0 1 7.5 17.875v-1.75a2.625 2.625 0 0 1 2.625-2.625M6 7h.01M10 7h3m-2 10h.01M15 17h3");
}
</style><path class="yk_bzgd1z"/>`,
		"fallback": "uix:server-copy",
	});
}

export default Component;
