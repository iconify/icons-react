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
		"content": `<style>.xmf1uzwhd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5v19M7.474 3.658l5.757 1.919a1.5 1.5 0 0 1 0 2.846l-5.757 1.919A1.5 1.5 0 0 1 5.5 8.919V5.081a1.5 1.5 0 0 1 1.974-1.423M3 21.5h5m8.75-4h2.5A1.75 1.75 0 0 1 21 19.25v.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 15 19.75v-.5a1.75 1.75 0 0 1 1.75-1.75m-.25 0v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><path class="xmf1uzwhd"/>`,
		"fallback": "uix:milestone-locked",
	});
}

export default Component;
