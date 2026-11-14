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
		"content": `<style>.rzgv6jbpj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21.5 20.5C17 20.5 15 18 13 13c-2-5.5-4-7.5-6-7.5s-3 8.5-4.5 15");
}
</style><path class="rzgv6jbpj"/>`,
		"fallback": "uix:skew-right",
	});
}

export default Component;
