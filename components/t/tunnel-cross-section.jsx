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
		"content": `<style>.quntfmb-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 17v-7a6.5 6.5 0 0 1 13 0v7Zm0 2.75v2m0-1h13m0-1v2M18.75 3.5h2.5M20 3.5V17m-1.25 0h2.5");
}
</style><path class="quntfmb-t"/>`,
		"fallback": "uix:tunnel-cross-section",
	});
}

export default Component;
