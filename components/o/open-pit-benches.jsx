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
		"content": `<style>.vvmmc6b-m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5L3 8.5h1.75l.5 3.5H7l.5 3.5h1.75l.5 3.5h4.5l.5-3.5h1.75L17 12h1.75l.5-3.5H21l.5-3.5");
}
</style><path class="vvmmc6b-m"/>`,
		"fallback": "uix:open-pit-benches",
	});
}

export default Component;
