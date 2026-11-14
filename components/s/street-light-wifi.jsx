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
		"content": `<style>.ao82oablx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 21.5V7a4 4 0 0 1 4-4h2m1.904 0h4.192a1.255 1.255 0 0 1 1.154 1.75l-.36.841a1.5 1.5 0 0 1-1.379.909h-3.022a1.5 1.5 0 0 1-1.379-.909l-.36-.841A1.255 1.255 0 0 1 14.404 3M4 21.5h5m8-2h.01m-2.485-2.475a3.5 3.5 0 0 1 4.95 0M12.5 14.138a7 7 0 0 1 9 0");
}
</style><path class="ao82oablx"/>`,
		"fallback": "uix:street-light-wifi",
	});
}

export default Component;
