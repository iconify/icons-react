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
		"content": `<style>.x364j-s-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12c3.5 0 6.5 4 6.5 6.5c0 2-1.75 2.5-3.5 2s-4.25-.5-6 0s-3.5 0-3.5-2c0-2.5 3-6.5 6.5-6.5m-9.75-.5a1.75 2.25 0 1 0 3.5 0a1.75 2.25 0 1 0-3.5 0m4.25-6a2 2.75 0 1 0 4 0a2 2.75 0 1 0-4 0m7 0a2 2.75 0 1 0 4 0a2 2.75 0 1 0-4 0m4.75 6a1.75 2.25 0 1 0 3.5 0a1.75 2.25 0 1 0-3.5 0");
}
</style><path class="x364j-s-t"/>`,
		"fallback": "uix:rx-pet",
	});
}

export default Component;
