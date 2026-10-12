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
		"content": `<style>.a-vhfkb1d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 19.5v-15l9.5 15v-15m4.75 2a2.25 2.25 0 1 1 0 4.5a2.25 2.25 0 1 1 0-4.5m-2.25 8h4.5");
}
</style><path class="a-vhfkb1d"/>`,
		"fallback": "iconoven:numero-sign",
	});
}

export default Component;
