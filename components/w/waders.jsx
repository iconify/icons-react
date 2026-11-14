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
		"content": `<style>.ct0jpfhch {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 6h9v6.5L16 19h3a1.5 1.5 0 0 1 1.5 1.5v.5h-8l-.5-7l-.5 7h-8v-.5A1.5 1.5 0 0 1 5 19h3l-.5-6.5Zm1 0L9 2.5M15.5 6L15 2.5");
}
</style><path class="ct0jpfhch"/>`,
		"fallback": "uix:waders",
	});
}

export default Component;
