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
		"content": `<style>.enmwf235g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 13.25l1.5-2V7.5a5 5 0 0 1 10 0v3.75l1.5 2ZM6 17h12m-9.5 4h7");
}
</style><path class="enmwf235g"/>`,
		"fallback": "uix:notification-center",
	});
}

export default Component;
