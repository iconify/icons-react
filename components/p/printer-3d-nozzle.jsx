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
		"content": `<style>.iztbwfb4l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.125 2.5h3.75A2.625 2.625 0 0 1 16.5 5.125v.25A2.625 2.625 0 0 1 13.875 8h-3.75A2.625 2.625 0 0 1 7.5 5.375v-.25A2.625 2.625 0 0 1 10.125 2.5m.713 7h2.324a1.5 1.5 0 0 1 1.364 2.125l-1.464 3.193A1.17 1.17 0 0 1 12 15.5a1.17 1.17 0 0 1-1.062-.682l-1.464-3.193A1.5 1.5 0 0 1 10.838 9.5M6 19.5h12");
}
</style><path class="iztbwfb4l"/>`,
		"fallback": "uix:printer-3d-nozzle",
	});
}

export default Component;
