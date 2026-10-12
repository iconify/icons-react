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
		"content": `<style>.fe2guabgv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 4.25v15.5m-3.5-3.5l3.5 3.5l3.5-3.5m5 3.5V4.25m-3.5 3.5l3.5-3.5l3.5 3.5");
}
</style><path class="fe2guabgv"/>`,
		"fallback": "iconoven:swap-vertical",
	});
}

export default Component;
