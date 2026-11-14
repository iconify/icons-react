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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lqa-c0nmg {
  d: path("m8.441 9.768l.088.205a1.5 1.5 0 0 0 1.235.897l.222.021a.48.48 0 0 1 .273.839l-.167.147a1.5 1.5 0 0 0-.472 1.452l.048.217a.48.48 0 0 1-.713.519l-.192-.114a1.5 1.5 0 0 0-1.526 0l-.192.114a.48.48 0 0 1-.713-.519l.048-.217a1.5 1.5 0 0 0-.472-1.452l-.167-.147a.48.48 0 0 1 .273-.839l.222-.021a1.5 1.5 0 0 0 1.235-.897l.088-.205a.48.48 0 0 1 .882 0M13 10.25h5.5m-5.5 3.5h3.5");
}

.poz_fvbbz {
  d: path("M6.875 5h10.25A4.375 4.375 0 0 1 21.5 9.375v5.25A4.375 4.375 0 0 1 17.125 19H6.875A4.375 4.375 0 0 1 2.5 14.625v-5.25A4.375 4.375 0 0 1 6.875 5");
}
</style><g class="hntgybcog"><path class="poz_fvbbz"/><path class="lqa-c0nmg"/></g>`,
		"fallback": "uix:membership-card",
	});
}

export default Component;
