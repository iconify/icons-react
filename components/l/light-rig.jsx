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
		"content": `<style>.dk5jq5bdb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h19M5 6.5v2.25m-1.25 3L2.5 17.5m3.75-5.75L7.5 17.5m-4.25-7a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m8.75-4v2.25m-1.25 3L9.5 17.5m3.75-5.75l1.25 5.75m-4.25-7a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m8.75-4v2.25m-1.25 3L16.5 17.5m3.75-5.75l1.25 5.75m-4.25-7a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><path class="dk5jq5bdb"/>`,
		"fallback": "uix:light-rig",
	});
}

export default Component;
