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
		"content": `<style>.ruetm08mb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 4.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M7 10l5-2l5 2m-5-2v6m-3 6l3-6l3 6M7 10h.01M17 10h.01M12 14h.01M9 20h.01M15 20h.01");
}
</style><path class="ruetm08mb"/>`,
		"fallback": "uix:keypoints",
	});
}

export default Component;
