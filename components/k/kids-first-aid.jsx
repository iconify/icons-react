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
		"content": `<style>.awl1vyr4n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.525 4.575l9.9 9.9a3.5 3.5 0 0 1 0 4.95a3.5 3.5 0 0 1-4.95 0l-9.9-9.9a3.5 3.5 0 0 1 0-4.95a3.5 3.5 0 0 1 4.95 0m2.829 2.829l-4.95 4.95m9.192-.708l-4.95 4.95");
}
</style><path class="awl1vyr4n"/>`,
		"fallback": "uix:kids-first-aid",
	});
}

export default Component;
