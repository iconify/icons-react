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
		"content": `<style>.rwdwm5bty {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3v15.5M20 3v15.5M5.5 4.5h13A1.5 1.5 0 0 1 20 6v1.5A1.5 1.5 0 0 1 18.5 9h-13A1.5 1.5 0 0 1 4 7.5V6a1.5 1.5 0 0 1 1.5-1.5m-3 17h19");
}
</style><path class="rwdwm5bty"/>`,
		"fallback": "uix:ski-finish-arch",
	});
}

export default Component;
