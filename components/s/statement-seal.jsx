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
		"content": `<style>.x7-t4eupz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 10.5V5a2.5 2.5 0 0 1 5 0v5.5m-7.75 0h10.5A1.75 1.75 0 0 1 19 12.25v.5a1.75 1.75 0 0 1-1.75 1.75H6.75A1.75 1.75 0 0 1 5 12.75v-.5a1.75 1.75 0 0 1 1.75-1.75M6.5 17h11M3 20.5h18");
}
</style><path class="x7-t4eupz"/>`,
		"fallback": "uix:statement-seal",
	});
}

export default Component;
