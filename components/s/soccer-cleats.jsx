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
		"content": `<style>.mtprusb8i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 3.5l6.5 1l.5 5.5c5.5.5 11 2 11 6v1.5h-18Zm2.5 14v3m5.5-3v3m6.5-3v3");
}
</style><path class="mtprusb8i"/>`,
		"fallback": "uix:soccer-cleats",
	});
}

export default Component;
