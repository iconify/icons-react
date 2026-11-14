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
		"content": `<style>.q_wdh4bfz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13 11l6.5-6.5m-6 0h6v6M11 13l-6.5 6.5m6 0h-6v-6");
}
</style><path class="q_wdh4bfz"/>`,
		"fallback": "uix:maximize",
	});
}

export default Component;
