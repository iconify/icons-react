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
		"content": `<style>.kgr85-pef {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.75 5.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m-11 6.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M9 10.5L15 7m-6 6.5l4.5 2.75M17 16h-.5a2.25 2.25 0 0 0 0 4.5h.5m2-4.5h.5a2.25 2.25 0 0 1 0 4.5H19m-2-2.25h2");
}
</style><path class="kgr85-pef"/>`,
		"fallback": "uix:share-link",
	});
}

export default Component;
