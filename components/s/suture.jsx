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
		"content": `<style>.gis95ab6n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19m-17-3L8 15m0-6l-3.5 6m5.75-6l3.5 6m0-6l-3.5 6M16 9l3.5 6m0-6L16 15");
}
</style><path class="gis95ab6n"/>`,
		"fallback": "uix:suture",
	});
}

export default Component;
