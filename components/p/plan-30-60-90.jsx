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
		"content": `<style>.ksr1qfbyl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21v-4h6.25v-4H15V9h6.5v12ZM18.25 9V2.5m0 0h3.25l-1 1.75l1 1.75h-3.25Z");
}
</style><path class="ksr1qfbyl"/>`,
		"fallback": "uix-sharp:plan-30-60-90",
	});
}

export default Component;
