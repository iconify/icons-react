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
		"content": `<style>.y55kxen8p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3.5Q5.5 3.5 5.5 6v4q0 2-2 2q2 0 2 2v4q0 2.5 2.5 2.5m8-17q2.5 0 2.5 2.5v4q0 2 2 2q-2 0-2 2v4q0 2.5-2.5 2.5M9.5 8h5m-5 4h5m-5 4h5");
}
</style><path class="y55kxen8p"/>`,
		"fallback": "uix:json-format",
	});
}

export default Component;
