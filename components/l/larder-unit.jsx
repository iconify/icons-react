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
		"content": `<style>.rbkqtrbvo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7A3.5 3.5 0 0 1 19 6v9a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 15V6a3.5 3.5 0 0 1 3.5-3.5M7 18.5V21h10v-2.5m-5-16v16m-2.75-10v4m5.5-4v4");
}
</style><path class="rbkqtrbvo"/>`,
		"fallback": "uix:larder-unit",
	});
}

export default Component;
