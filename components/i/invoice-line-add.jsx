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
		"content": `<style>.viy39kl8v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.84 20.774L14.5 21L12 19.5L9.5 21l-2.25-1.5L5 21V2.5h14v9.9M8.5 7h7m-7 4h7m-7 4h4m5.5 0v6m-3-3h6");
}
</style><path class="viy39kl8v"/>`,
		"fallback": "uix:invoice-line-add",
	});
}

export default Component;
