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
		"content": `<style>.l567ahbgl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 7.75v-2a2 2 0 0 1 2-2h2m8.5 0h2a2 2 0 0 1 2 2v2m0 8.5v2a2 2 0 0 1-2 2h-2m-8.5 0h-2a2 2 0 0 1-2-2v-2m7-12.5h2.5m-2.5 16.5h2.5m-9.5-9.5v2.5m16.5-2.5v2.5");
}
</style><path class="l567ahbgl"/>`,
		"fallback": "iconoven:selection-x",
	});
}

export default Component;
