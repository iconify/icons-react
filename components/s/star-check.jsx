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
		"content": `<style>.av34yjbbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.75 3.5l2.057 4.418l4.838.592l-3.566 3.322l.932 4.783L9.75 14.25l-4.261 2.365l.932-4.783L2.855 8.51l4.838-.592Zm5 14.5l2 2L21 15.75");
}
</style><path class="av34yjbbr"/>`,
		"fallback": "uix-sharp:star-check",
	});
}

export default Component;
