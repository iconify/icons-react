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
		"content": `<style>.y2816j2mk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 9.5a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 1 0-12.5 0M9.5 3.75v11.5m5-11.5v11.5m-12 4.25q2.375-2 4.75 0t4.75 0t4.75 0t4.75 0");
}
</style><path class="y2816j2mk"/>`,
		"fallback": "uix:safe-water-mark",
	});
}

export default Component;
