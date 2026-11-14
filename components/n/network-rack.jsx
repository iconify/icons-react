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
		"content": `<style>.je35klucg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.5h8A3.5 3.5 0 0 1 19.5 6v12a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 18V6A3.5 3.5 0 0 1 8 2.5M4.5 8.75h15m-15 6.5h15m-12-9.5h4M7.5 12h4m-4 6.5h4M16 5.75h.01M16 12h.01M16 18.5h.01");
}
</style><path class="je35klucg"/>`,
		"fallback": "uix:network-rack",
	});
}

export default Component;
