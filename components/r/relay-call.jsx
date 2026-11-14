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
		"content": `<style>.y--la2bpx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.731 18.016C7.157 16.453 3 11.285 3 5.25C3 4 4 3 5.25 3H7.5l1.75 4L7.5 8.5c1 2 3.5 4.5 5.5 5.5l1.5-1.75l1.167.511M15.5 16.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.75a1 1 0 0 1-1 1h-2l-2 1.5v-1.5a1 1 0 0 1-1-1Z");
}
</style><path class="y--la2bpx"/>`,
		"fallback": "uix:relay-call",
	});
}

export default Component;
