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
		"content": `<style>.encj2ebyp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 20.5l5-17l5 17m2.75 0L18.5 10l3.25 10.5m-17.5-6h6.5M16.5 17h4");
}
</style><path class="encj2ebyp"/>`,
		"fallback": "uix:text-size-toggle",
	});
}

export default Component;
