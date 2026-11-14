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
		"content": `<style>.ism2xfb9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.823 3h4.354a1.5 1.5 0 0 1 1.265.695l2.698 4.24a1.5 1.5 0 0 1 .179 1.21l-3.012 10.759A1.5 1.5 0 0 1 13.862 21h-3.724a1.5 1.5 0 0 1-1.445-1.096L5.681 9.145a1.5 1.5 0 0 1 .179-1.21l2.698-4.24A1.5 1.5 0 0 1 9.823 3M12 8v7m-2.5-4.5h5");
}
</style><path class="ism2xfb9x"/>`,
		"fallback": "uix:life-funeral-cover",
	});
}

export default Component;
