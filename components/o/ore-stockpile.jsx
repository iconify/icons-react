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
		"content": `<style>.xwvq49n0t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 17.5L7.5 11A2 2 0 0 1 11 9a1.8 1.8 0 0 1 3.5.5A1.8 1.8 0 0 1 17 12l4.25 5.5m-18.75 0h19");
}
</style><path class="xwvq49n0t"/>`,
		"fallback": "uix:ore-stockpile",
	});
}

export default Component;
