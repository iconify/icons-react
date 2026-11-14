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
		"content": `<style>.q35ct03gj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8V6.5C3 4.5 7 3 12 3s9 1.5 9 3.5V8h-4.5V6.5h-9V8Zm5 3h8a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 18v-3.5A3.5 3.5 0 0 1 8 11m.5 3.5h.01m3.49 0h.01m3.49 0h.01M8.5 17.75h.01m3.49 0h.01m3.49 0h.01");
}
</style><path class="q35ct03gj"/>`,
		"fallback": "uix:phone-landline",
	});
}

export default Component;
