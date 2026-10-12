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
		"content": `<style>.lsx7_9bbk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10.75a7.5 4.5-30 0 0 13-7.5Zm8.75.15l-4-6.9m3.75 7.75L9 20.5m3.5-8.75L16 20.5m-10.5 0h13");
}
</style><path class="lsx7_9bbk"/>`,
		"fallback": "iconoven:radio-telescope",
	});
}

export default Component;
