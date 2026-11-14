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
		"content": `<style>.gyetq1t7f {
  d: path("M7.75 5.5h.5a5.25 5.25 0 0 1 5.25 5.25v2.5a5.25 5.25 0 0 1-5.25 5.25h-.5a5.25 5.25 0 0 1-5.25-5.25v-2.5A5.25 5.25 0 0 1 7.75 5.5M13.5 12h7.75M18 12v3.25M21.25 12v3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pucyf_bmh {
  d: path("M7 8.25h2A1.75 1.75 0 0 1 10.75 10v4A1.75 1.75 0 0 1 9 15.75H7A1.75 1.75 0 0 1 5.25 14v-4A1.75 1.75 0 0 1 7 8.25M5.25 12h5.5");
}
</style><g class="hntgybcog"><path class="gyetq1t7f"/><path class="pucyf_bmh"/></g>`,
		"fallback": "uix:prepayment-key",
	});
}

export default Component;
