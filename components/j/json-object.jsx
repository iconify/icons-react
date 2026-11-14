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
		"content": `<style>.rk45h-b8v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3.5Q5.5 3.5 5.5 6v4q0 2-2 2q2 0 2 2v4q0 2.5 2.5 2.5m8-17q2.5 0 2.5 2.5v4q0 2 2 2q-2 0-2 2v4q0 2.5-2.5 2.5M10.75 9h2.5A1.75 1.75 0 0 1 15 10.75v2.5A1.75 1.75 0 0 1 13.25 15h-2.5A1.75 1.75 0 0 1 9 13.25v-2.5A1.75 1.75 0 0 1 10.75 9");
}
</style><path class="rk45h-b8v"/>`,
		"fallback": "uix:json-object",
	});
}

export default Component;
