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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iw49jcbqb {
  d: path("M2.25 12a9.75 9.75 0 1 0 19.5 0a9.75 9.75 0 1 0-19.5 0");
}

.m9u8b_b5h {
  d: path("M12 7a5 5 0 0 1 4.75 3.75M18 8.5l-1.25 2.25l-2-1.25m1.5 5a5 5 0 0 1-5.5 2.25M12 19l-1.25-2.25l2-1m-5-1.25a5 5 0 0 1 .75-6M6 8.5h2.5v2.25");
}
</style><g class="hntgybcog"><path class="iw49jcbqb"/><path class="m9u8b_b5h"/></g>`,
		"fallback": "uix:mandatory-roundabout",
	});
}

export default Component;
