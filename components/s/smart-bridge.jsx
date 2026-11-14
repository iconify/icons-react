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
		"content": `<style>.io_37tkhb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 11.5h11A3.5 3.5 0 0 1 21 15v1.5a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 16.5V15a3.5 3.5 0 0 1 3.5-3.5m.5 0L5 3m12 8.5L19 3M9 15.75h.01m2.99 0h.01m2.99 0h.01");
}
</style><path class="io_37tkhb"/>`,
		"fallback": "uix:smart-bridge",
	});
}

export default Component;
