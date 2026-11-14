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
		"content": `<style>.rj4dymbyw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2 3l20 5m-9.25 3a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M10 5v6.5l1 5l5 3.5m-5-3.5l-1.5 5");
}
</style><path class="rj4dymbyw"/>`,
		"fallback": "uix:pin-zipline",
	});
}

export default Component;
