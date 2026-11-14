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

.rt6-9ybdq {
  d: path("M5 8a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}

.xnqf-2bqe {
  d: path("m7.25 12l1.25 9h2l1.25-9m3.379-7.25a6.5 6.5 0 0 1 0 6.5m2.382-7.875a9.25 9.25 0 0 1 0 9.25");
}
</style><g class="hntgybcog"><path class="rt6-9ybdq"/><path class="xnqf-2bqe"/></g>`,
		"fallback": "uix:microphone-wireless",
	});
}

export default Component;
