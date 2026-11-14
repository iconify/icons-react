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
		"content": `<style>.rq5agxnox {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 15.5v-8L12 3l3 4.5v8m-8 0h10a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 17A1.5 1.5 0 0 1 7 15.5m-2.5 3h15A1.5 1.5 0 0 1 21 20a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20a1.5 1.5 0 0 1 1.5-1.5M9 7.5h6");
}
</style><path class="rq5agxnox"/>`,
		"fallback": "uix:pin-monument",
	});
}

export default Component;
