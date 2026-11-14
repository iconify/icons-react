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
		"content": `<style>.ygx3n07xv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 17h15m-17-9.5L12 17l9.5-9.5m-3.5 0h3.5V11");
}
</style><path class="ygx3n07xv"/>`,
		"fallback": "uix:reflection-light",
	});
}

export default Component;
