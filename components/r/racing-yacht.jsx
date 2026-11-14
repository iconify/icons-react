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
		"content": `<style>.il9jtmbkk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 8.81v4.44a1.5 1.5 0 0 1-1.5 1.5H6.544a1.5 1.5 0 0 1-1.313-2.226l2.456-4.44a1.5 1.5 0 0 1 2.813.726m5.381.294l2.139 3.337a1.5 1.5 0 0 1-1.263 2.309H14.75a1.5 1.5 0 0 1-1.5-1.5V9.875a1.428 1.428 0 0 1 2.631-.771M3 17.75h18C19.5 20 17.5 21 14.5 21H6c-1.5 0-2.5-1.25-3-3.25");
}
</style><path class="il9jtmbkk"/>`,
		"fallback": "uix:racing-yacht",
	});
}

export default Component;
