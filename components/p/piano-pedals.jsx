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
		"content": `<style>.xuaaf9ksi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 3h10.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 5.25A2.25 2.25 0 0 1 6.75 3m.5 7.5za.84.84 0 0 1 .828.985l-1.325 7.567A1.75 1.75 0 0 1 5.03 20.5H4.5a1.386 1.386 0 0 1-1.298-1.873l2.697-7.191A1.44 1.44 0 0 1 7.25 10.5m4.75 0za1.105 1.105 0 0 1 1.1.995l.708 7.081a1.75 1.75 0 0 1-1.742 1.924h-.132a1.75 1.75 0 0 1-1.742-1.924l.708-7.081A1.105 1.105 0 0 1 12 10.5m4.75 0za1.44 1.44 0 0 1 1.351.936l2.697 7.191A1.386 1.386 0 0 1 19.5 20.5h-.53a1.75 1.75 0 0 1-1.723-1.448l-1.325-7.567a.84.84 0 0 1 .828-.985");
}
</style><path class="xuaaf9ksi"/>`,
		"fallback": "uix:piano-pedals",
	});
}

export default Component;
