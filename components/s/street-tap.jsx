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
		"content": `<style>.jv7sol-wd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 18.5v-15M6 3.5h5M8.5 8H14a2.5 2.5 0 0 1 2.5 2.5v1M6.25 20l.335-.671a1.5 1.5 0 0 1 1.342-.829h1.146a1.5 1.5 0 0 1 1.342.829l.335.671a1.036 1.036 0 0 1-.927 1.5H7.177A1.036 1.036 0 0 1 6.25 20m10.25-5.5L18 17a1.75 1.75 0 1 1-3 0Z");
}
</style><path class="jv7sol-wd"/>`,
		"fallback": "uix:street-tap",
	});
}

export default Component;
