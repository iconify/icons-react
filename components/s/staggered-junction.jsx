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
		"content": `<style>.g9fwcubtn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5H9V2.5M2.5 10H9v11.5m6-19V14h6.5m0 5H15v2.5");
}
</style><path class="g9fwcubtn"/>`,
		"fallback": "uix:staggered-junction",
	});
}

export default Component;
