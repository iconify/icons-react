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
		"content": `<style>.leoqryups {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3v6.5L4.75 20q-.5 1 .75 1h13q1.25 0 .75-1L14 9.5V3M8.5 3h7M7 15.5h10m-7 2.75h.01m3.99 0h.01");
}
</style><path class="leoqryups"/>`,
		"fallback": "uix-sharp:research-flask-game",
	});
}

export default Component;
