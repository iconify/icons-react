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
		"content": `<style>.tcp86acja {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12.5c-3 0-5.5 3-5.5 5.25c0 1.75 1.5 2.75 3 2.25c1-.3 1.75-.5 2.5-.5s1.5.2 2.5.5c1.5.5 3-.5 3-2.25c0-2.25-2.5-5.25-5.5-5.25m-9.5-2a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4.25-4.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4.25 4.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="tcp86acja"/>`,
		"fallback": "uix:pet-friendly-office",
	});
}

export default Component;
