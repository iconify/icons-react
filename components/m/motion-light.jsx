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
		"content": `<style>.juir1xb-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v7M3 6h3.5m0-3h14l-2 5.5h-10Zm3 8.5l-3 9m7-9v9m4-9l3 9");
}
</style><path class="juir1xb-k"/>`,
		"fallback": "uix:motion-light",
	});
}

export default Component;
