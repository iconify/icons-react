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
		"content": `<style>.hunw_bc-l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18M2.75 20v-2c0-2.25 1-3.75 2.25-3.75s2.25 1.5 2.25 3.75v2m-4-10.5a1.75 1.75 0 0 1 3.5 0a1.75 1.75 0 0 1-3.5 0M9.75 20v-2c0-2.25 1-3.75 2.25-3.75s2.25 1.5 2.25 3.75v2m-4-10.5a1.75 1.75 0 0 1 3.5 0a1.75 1.75 0 0 1-3.5 0m6.5 10.5v-2c0-2.25 1-3.75 2.25-3.75s2.25 1.5 2.25 3.75v2m-4-10.5a1.75 1.75 0 0 1 3.5 0a1.75 1.75 0 0 1-3.5 0");
}
</style><path class="hunw_bc-l"/>`,
		"fallback": "uix:people-crowd-limit",
	});
}

export default Component;
