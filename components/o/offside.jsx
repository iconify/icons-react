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
		"content": `<style>.q8nzkws9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5v19m0-18q4.5-2 8.5 0t6.5 0v9q-2.5 2-6.5 0t-8.5 0m0 0l15-9");
}
</style><path class="q8nzkws9u"/>`,
		"fallback": "uix:offside",
	});
}

export default Component;
