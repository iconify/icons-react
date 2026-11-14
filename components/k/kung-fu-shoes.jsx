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
		"content": `<style>.vmk8llbqp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5v-5C2.5 11 3.5 10 5 10s3 2 5.5 2c3.5 0 6.5-1.5 11-5c0 6.5-2 10.5-5.5 10.5Zm0-2.75h17.25");
}
</style><path class="vmk8llbqp"/>`,
		"fallback": "uix:kung-fu-shoes",
	});
}

export default Component;
