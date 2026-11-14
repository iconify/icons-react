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
		"content": `<style>.t20knfbzw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 20l4-4.5l4 4.5m-4-4.5V9m-3 1.5L18.25 4m0 0zA1.75 1.75 0 0 1 20 5.75v2.5A1.75 1.75 0 0 1 18.25 10a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 18.25 4");
}
</style><path class="t20knfbzw"/>`,
		"fallback": "uix:mic-stand-boom",
	});
}

export default Component;
