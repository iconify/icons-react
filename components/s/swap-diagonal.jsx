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
		"content": `<style>.bmsw8_bfe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 7.75h15.5m-3.5-3.5l3.5 3.5l-3.5 3.5m3.5 5H4.25m3.5-3.5l-3.5 3.5l3.5 3.5");
}
</style><path class="bmsw8_bfe"/>`,
		"fallback": "iconoven:swap-diagonal",
	});
}

export default Component;
