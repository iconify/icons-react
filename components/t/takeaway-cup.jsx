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
		"content": `<style>.w5fktab6a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7h12l-1.5 13.5h-9Zm.5-3h11A1.5 1.5 0 0 1 19 5.5A1.5 1.5 0 0 1 17.5 7h-11A1.5 1.5 0 0 1 5 5.5A1.5 1.5 0 0 1 6.5 4m0 8h11");
}
</style><path class="w5fktab6a"/>`,
		"fallback": "uix:takeaway-cup",
	});
}

export default Component;
