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
		"content": `<style>.av8gqfj2t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5v-15A1.5 1.5 0 0 1 4 4h4.5A1.5 1.5 0 0 1 10 5.5v15m-7.5 0h19M13.75 10a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m3.75 3.75v6.75M5.25 9h2m-2 4h2");
}
</style><path class="av8gqfj2t"/>`,
		"fallback": "uix:urban-rural",
	});
}

export default Component;
