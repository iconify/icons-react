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
		"content": `<style>.bj200gb8v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 7a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m10 10a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M18.5 4.5l-13 15");
}
</style><path class="bj200gb8v"/>`,
		"fallback": "uix:percent-symbol",
	});
}

export default Component;
