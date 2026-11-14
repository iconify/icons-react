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
		"content": `<style>.jvg6zrbdk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21.5V8.9m2.4-5.4h11.1L16 8l2.5 4.5h-2.104m-7.8 0H5m-1.5-9l17 17");
}
</style><path class="jvg6zrbdk"/>`,
		"fallback": "uix:priority-none",
	});
}

export default Component;
