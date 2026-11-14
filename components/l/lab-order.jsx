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

.olsgfqz6y {
  d: path("M5 2.5v13C5 17.4 6.6 19 8.5 19s3.5-1.6 3.5-3.5v-13m-8.5 0h10");
}

.pasxli_ph {
  fill: currentColor;
  d: path("M5 11h7v4.5c0 1.9-1.6 3.5-3.5 3.5S5 17.4 5 15.5Z");
}

.q15aztb6y {
  d: path("M18 14.5v7M14.5 18h7");
}
</style><g class="hntgybcog"><path class="olsgfqz6y"/><path class="pasxli_ph"/><path class="q15aztb6y"/></g>`,
		"fallback": "uix:lab-order",
	});
}

export default Component;
