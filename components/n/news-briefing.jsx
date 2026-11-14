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
		"content": `<style>.rkdj1pb2d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15v19h-15Zm4 6h.01m2.99 0H16M8.5 15h.01m2.99 0H16");
}
</style><path class="rkdj1pb2d"/>`,
		"fallback": "uix-sharp:news-briefing",
	});
}

export default Component;
