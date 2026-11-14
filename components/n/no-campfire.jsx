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
		"content": `<style>.btlrw_bac {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.992 5.048A15 15 0 0 1 11 3c3.113 2.668 4.248 5.337 3.582 7.654m-5.184 2.659q-.24-.124-.458-.282q-.218-.159-.409-.349t-.35-.407t-.285-.456M3.5 16.5l12 4m-12 0l9.75-3.25M3.5 3.5l17 17");
}
</style><path class="btlrw_bac"/>`,
		"fallback": "uix:no-campfire",
	});
}

export default Component;
