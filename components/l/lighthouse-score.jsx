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
		"content": `<style>.kzaogiw3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 17a9.5 9.5 0 1 1 17 0M12 13l3.5-4.5M9 19.5h6");
}
</style><path class="kzaogiw3j"/>`,
		"fallback": "uix:lighthouse-score",
	});
}

export default Component;
