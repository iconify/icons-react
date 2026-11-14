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
		"content": `<style>.gbcuu-bwi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.5h4A1.5 1.5 0 0 1 15.5 4A1.5 1.5 0 0 1 14 5.5h-4A1.5 1.5 0 0 1 8.5 4A1.5 1.5 0 0 1 10 2.5m-1.375 3h6.75A2.625 2.625 0 0 1 18 8.125v4.25A2.625 2.625 0 0 1 15.375 15h-6.75A2.625 2.625 0 0 1 6 12.375v-4.25A2.625 2.625 0 0 1 8.625 5.5M8.5 15l1.5 5.5h4l1.5-5.5M6 10.25h12");
}
</style><path class="gbcuu-bwi"/>`,
		"fallback": "uix:microscope-objective",
	});
}

export default Component;
