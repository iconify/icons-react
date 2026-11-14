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
		"content": `<style>.pwyek5bnr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5v-17c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v4m0 7v6m-5.5-16v4m-2-2h4M7 12h13.5m-2.75-2.75L20.5 12l-2.75 2.75M2.5 21.5h19");
}
</style><path class="pwyek5bnr"/>`,
		"fallback": "uix:outpatient-department",
	});
}

export default Component;
