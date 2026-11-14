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

.kfv81oe6l {
  d: path("M4.5 17a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m10 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.tq_az4h_p {
  d: path("M3 14.5v-5h12l6 3v2Zm2-5V5h2.5");
}
</style><g class="hntgybcog"><path class="tq_az4h_p"/><path class="kfv81oe6l"/></g>`,
		"fallback": "uix:soapbox-car",
	});
}

export default Component;
