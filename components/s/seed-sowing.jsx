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
		"content": `<style>.ge1lcwliy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5H11c2.5 0 4 1 5.5 2.75L18 8c.75 1 .25 2-1 2h-4.5l.5 2.25c.25 1-.5 1.75-1.5 1.25l-3.5-2H2.5m0 9.5h19m-11-14.25H15m3 6.5h.01M15 16.5h.01m4.49 1.25h.01");
}
</style><path class="ge1lcwliy"/>`,
		"fallback": "uix:seed-sowing",
	});
}

export default Component;
