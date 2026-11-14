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
		"content": `<style>.p9o51lbwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5V13H11V5h10.5v16.5ZM11 13v8.5m-6-4.25h3.5m5-4H19");
}
</style><path class="p9o51lbwh"/>`,
		"fallback": "uix:shelf-riser",
	});
}

export default Component;
