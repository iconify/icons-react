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
		"content": `<style>.grqc149xi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8L8 5V3h5v2l2.5 3v11.5A1.5 1.5 0 0 1 14 21H7a1.5 1.5 0 0 1-1.5-1.5Zm10 2H17a1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 17 16h-1.5M8 13h5");
}
</style><path class="grqc149xi"/>`,
		"fallback": "uix:milk-jug-plastic",
	});
}

export default Component;
