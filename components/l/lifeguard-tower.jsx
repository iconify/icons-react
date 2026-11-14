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
		"content": `<style>.enpzthb2g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 5.5h5.5a1.75 1.75 0 0 1 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-5.5A1.75 1.75 0 0 1 7.5 9.75v-2.5A1.75 1.75 0 0 1 9.25 5.5M5 5.5l7-3l7 3m-10.5 6l-2 9.5m9-9.5l2 9.5m-10-5h9");
}
</style><path class="enpzthb2g"/>`,
		"fallback": "uix:lifeguard-tower",
	});
}

export default Component;
