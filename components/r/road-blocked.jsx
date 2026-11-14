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
		"content": `<style>.ies21hufw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 4h15.5a1.75 1.75 0 0 1 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75H4.25A1.75 1.75 0 0 1 2.5 7.75v-2A1.75 1.75 0 0 1 4.25 4M3.5 21.5L6 9.5m14.5 12L18 9.5m-10 0L11 4m2 5.5L16 4m-4 9v6");
}
</style><path class="ies21hufw"/>`,
		"fallback": "uix:road-blocked",
	});
}

export default Component;
