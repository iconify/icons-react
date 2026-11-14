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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kyvbmwbgx {
  d: path("M6.5 8h11a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 18v-6.5A3.5 3.5 0 0 1 6.5 8M3 11h18");
}

.phn_q_b6a {
  d: path("M9.5 16.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-.5-11C7.75 4.25 10.25 3 9 2m6 3.25C13.75 4.25 16.25 3 15 2");
}
</style><g class="hntgybcog"><path class="kyvbmwbgx"/><path class="phn_q_b6a"/></g>`,
		"fallback": "uix:steam-oven",
	});
}

export default Component;
