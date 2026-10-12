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
		"content": `<style>.b9wtxvbvp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21.25 2.75L10 14m-4-4l8 8m-7-7l-2.5 2.5m5.5.5l-2.5 2.5m5.5.5l-2.5 2.5");
}
</style><path class="b9wtxvbvp"/>`,
		"fallback": "iconoven:rake-farm",
	});
}

export default Component;
