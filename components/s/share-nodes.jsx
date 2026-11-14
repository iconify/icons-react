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
		"content": `<style>.ee1x7cb-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.5 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M3 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m12.5 6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-7.75-7.75l8-4m-8 6.5l8 4");
}
</style><path class="ee1x7cb-p"/>`,
		"fallback": "uix:share-nodes",
	});
}

export default Component;
