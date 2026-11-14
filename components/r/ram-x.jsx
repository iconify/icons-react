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
		"content": `<style>.tq243rm0t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.625 6.5h14.75A2.625 2.625 0 0 1 22 9.125v3.75a2.625 2.625 0 0 1-2.625 2.625H4.625A2.625 2.625 0 0 1 2 12.875v-3.75A2.625 2.625 0 0 1 4.625 6.5m.875 9v3m3-3v3m7-3v3m3-3v3m-9-10l5 5m0-5l-5 5");
}
</style><path class="tq243rm0t"/>`,
		"fallback": "uix:ram-x",
	});
}

export default Component;
