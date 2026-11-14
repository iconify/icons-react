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
		"content": `<style>.llnaj4buv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 20l6.5-9.5M6.5 4c2 0 3 .5 3.5 2l5.5 12.5c.4.9 1 1.5 2.5 1.5");
}
</style><path class="llnaj4buv"/>`,
		"fallback": "uix:lambda",
	});
}

export default Component;
