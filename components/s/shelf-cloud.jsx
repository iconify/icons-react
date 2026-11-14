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
		"content": `<style>.jgyqx1boz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 13h12a3.5 3.5 0 0 0 0-7A5.5 5.5 0 0 0 7.75 7A3.25 3.25 0 0 0 6 13m1 0a2.5 2.5 0 1 0 2.25 3.75M2.5 21h19");
}
</style><path class="jgyqx1boz"/>`,
		"fallback": "uix:shelf-cloud",
	});
}

export default Component;
