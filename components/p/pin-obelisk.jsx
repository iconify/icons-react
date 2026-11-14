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
		"content": `<style>.bp5nrgwbw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 21L9.5 6L12 2.5L14.5 6L16 21M4.5 21h15M9.5 6h5");
}
</style><path class="bp5nrgwbw"/>`,
		"fallback": "uix:pin-obelisk",
	});
}

export default Component;
