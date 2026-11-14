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
		"content": `<style>.xm5ldxddk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 21L14 9c1-1.6.5-3.5-1-4.5c-.75-.5-1.25-.5-2 0c-1.5 1-2 2.9-1 4.5l7.5 12");
}
</style><path class="xm5ldxddk"/>`,
		"fallback": "uix:ribbon",
	});
}

export default Component;
