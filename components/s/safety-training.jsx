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
		"content": `<style>.tqop6nbza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 12.5C5.5 8 8.5 5 12 5s6.5 3 6.5 7.5m-15 0h17M12 5v2.75m0 8.75c-2-1.25-5.5-1.5-9.5-1v5c4-.5 7.5-.25 9.5 1c2-1.25 5.5-1.5 9.5-1v-5c-4-.5-7.5-.25-9.5 1m0 0v5");
}
</style><path class="tqop6nbza"/>`,
		"fallback": "uix:safety-training",
	});
}

export default Component;
