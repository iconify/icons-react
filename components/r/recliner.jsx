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
		"content": `<style>.sbvtqccvp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 3.5l3 12h7.5l6-2.5M6 11.5h7m-2.25 4V20M7.5 20H14");
}
</style><path class="sbvtqccvp"/>`,
		"fallback": "uix:recliner",
	});
}

export default Component;
