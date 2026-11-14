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
		"content": `<style>.xgpz5m-xc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 4.5h8V3h2v8h-2V9.5H2m10-2.25c4 0 6 2.75 6 7.75M2 19q2.5-1.5 5 0t5 0t5 0t5 0");
}
</style><path class="xgpz5m-xc"/>`,
		"fallback": "uix:outfall-pipe",
	});
}

export default Component;
