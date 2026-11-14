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
		"content": `<style>.xvaa1hbfe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5H8v4h8v-4h5.5m-9.5 7V20m-4.5-4.5L12 20l4.5-4.5");
}
</style><path class="xvaa1hbfe"/>`,
		"fallback": "uix:position-lost",
	});
}

export default Component;
