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
		"content": `<style>.b-lcf0b9o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7V3h4m10 0h4v4m0 10v4h-4M7 21H3v-4m7.5-14h3m-3 18h3M3 10.5v3m18-3v3m-7.643-4.616l1.637 3.477a1.5 1.5 0 0 1-1.358 2.139h-3.272a1.5 1.5 0 0 1-1.358-2.139l1.637-3.477a1.5 1.5 0 0 1 2.714 0M12 14.5V18");
}
</style><path class="b-lcf0b9o"/>`,
		"fallback": "uix:outdoor-zone",
	});
}

export default Component;
