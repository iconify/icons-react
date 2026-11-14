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
		"content": `<style>.y2wcvxb5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 14.5h9a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 17A2.5 2.5 0 0 1 5 14.5m2.5-5h9A2.5 2.5 0 0 1 19 12a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 12a2.5 2.5 0 0 1 2.5-2.5m2.5-5h9A2.5 2.5 0 0 1 21.5 7A2.5 2.5 0 0 1 19 9.5h-9A2.5 2.5 0 0 1 7.5 7A2.5 2.5 0 0 1 10 4.5");
}
</style><path class="y2wcvxb5m"/>`,
		"fallback": "uix:sponge-pack",
	});
}

export default Component;
