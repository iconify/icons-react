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
		"content": `<style>.yavp38b2o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5h12m-9 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3 3v7m-9 4l1.5-4h15l1.5 4");
}
</style><path class="yavp38b2o"/>`,
		"fallback": "uix:lat-pulldown",
	});
}

export default Component;
