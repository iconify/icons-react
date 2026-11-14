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
		"content": `<style>.ycgdmsbrr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.636 12.414l7.778-7.778a3.5 3.5 0 0 1 4.95 0a3.5 3.5 0 0 1 0 4.95l-7.778 7.778a3.5 3.5 0 0 1-4.95 0a3.5 3.5 0 0 1 0-4.95m3.889-3.889l4.95 4.95M15.5 15.5l5 5m0-5l-5 5");
}
</style><path class="ycgdmsbrr"/>`,
		"fallback": "uix:medicine-x",
	});
}

export default Component;
