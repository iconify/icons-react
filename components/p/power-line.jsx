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
		"content": `<style>.ei-flfbxo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.25v18m14-18v18M2.75 5.5h4.5m9.5 0h4.5M5 5.5q7 5.5 14 0m-14 4q7 5.5 14 0");
}
</style><path class="ei-flfbxo"/>`,
		"fallback": "iconoven:power-line",
	});
}

export default Component;
