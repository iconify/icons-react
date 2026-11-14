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
		"content": `<style>.dswd_0b9v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.61 8h4.78a1.75 1.75 0 0 1 1.744 1.605l.708 8.5A1.75 1.75 0 0 1 15.098 20H8.902a1.75 1.75 0 0 1-1.744-1.895l.708-8.5A1.75 1.75 0 0 1 9.61 8m1.64-4.5h1.5A2.25 2.25 0 0 1 15 5.75A2.25 2.25 0 0 1 12.75 8h-1.5A2.25 2.25 0 0 1 9 5.75a2.25 2.25 0 0 1 2.25-2.25M10.5 13h.01m2.99 0h.01M12 16.5h.01");
}
</style><path class="dswd_0b9v"/>`,
		"fallback": "uix:salt-hash",
	});
}

export default Component;
