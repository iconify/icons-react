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
		"content": `<style>.v4chw54bo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 21.5v-14a4 4 0 0 1 8 0v2m-1.273 8.055l2.25-2.1a1.5 1.5 0 0 1 2.046 0l2.25 2.1a1.5 1.5 0 0 1 .477 1.097v1.598a1.5 1.5 0 0 1-1.5 1.5h-4.5a1.5 1.5 0 0 1-1.5-1.5v-1.598a1.5 1.5 0 0 1 .477-1.097");
}
</style><path class="v4chw54bo"/>`,
		"fallback": "uix:senior-living",
	});
}

export default Component;
