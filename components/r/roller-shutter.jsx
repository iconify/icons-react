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
		"content": `<style>.vm64oubme {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15A1.5 1.5 0 0 1 21 4a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 4a1.5 1.5 0 0 1 1.5-1.5m.5 3V21h14V5.5m-14 5h14M5 15.75h14");
}
</style><path class="vm64oubme"/>`,
		"fallback": "uix:roller-shutter",
	});
}

export default Component;
