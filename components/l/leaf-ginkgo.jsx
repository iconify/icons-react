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
		"content": `<style>.k4x4a6b6u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 15.5C8 14 4 10.5 3 7c2.5-3.5 6-4.5 8-3.75l1 3.25l1-3.25c2-.75 5.5.25 8 3.75c-1 3.5-5 7-9 8.5m0 0c0 2.5-.5 4.5-2 6");
}
</style><path class="k4x4a6b6u"/>`,
		"fallback": "uix:leaf-ginkgo",
	});
}

export default Component;
