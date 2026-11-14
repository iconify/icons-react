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
		"content": `<style>.emrmu0vbm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12q2.5-8 5 0t5 0m3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><path class="emrmu0vbm"/>`,
		"fallback": "uix:photon",
	});
}

export default Component;
