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
		"content": `<style>.ye-bsci_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.25c-5 0-9.25-1.75-9.25-4.25c0-2 2.75-3.5 6.75-4l3 3.5L14 13c4.5.25 7.25 1.75 7.25 4c0 2.5-4.25 4.25-9.25 4.25m0-9.75c-2.5 0-4.25-1.75-4.25-4.5c1 0 2 .25 2.75 1c.25-2 .75-3.25 1.5-4.25c.75 1 1.25 2.25 1.5 4.25c.75-.75 1.75-1 2.75-1c0 2.75-1.75 4.5-4.25 4.5");
}
</style><path class="ye-bsci_l"/>`,
		"fallback": "iconoven:water-lily",
	});
}

export default Component;
