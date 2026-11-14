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
		"content": `<style>.wtsnp4ikr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 21l5-9l9-9a2.875 2.875 0 0 1 4 4l-9 9Zm5-9l4 4m5.5-9.5L14 10");
}
</style><path class="wtsnp4ikr"/>`,
		"fallback": "uix:stylus",
	});
}

export default Component;
