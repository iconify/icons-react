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
		"content": `<style>.u8u3egvso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 20.5l7-17m11 17l-7-17m-6 17c.5-4.5 3.5-5.5 2.5-9.5m5.5 9.5c-.5-4.5-3.5-5.5-2.5-9.5");
}
</style><path class="u8u3egvso"/>`,
		"fallback": "uix:light-trails",
	});
}

export default Component;
