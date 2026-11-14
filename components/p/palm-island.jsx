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
		"content": `<style>.a3-4ukb0c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 20c0-3 4-5 8-5s8 2 8 5Zm8-5c0-3 1-6 1-9m0 0c-3-1-5 0-6.5 2M13 6c3-1 5 0 6.5 2M13 6c-1-2.5-3-3-4.5-2.5");
}
</style><path class="a3-4ukb0c"/>`,
		"fallback": "uix:palm-island",
	});
}

export default Component;
