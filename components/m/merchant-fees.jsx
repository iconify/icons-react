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
		"content": `<style>.x7p108bak {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9.5L4.5 4h15L21 9.5ZM4.5 12v8h15v-8M9 17.5l6-4m-5.75.25h.01m5.49 3.5h.01");
}
</style><path class="x7p108bak"/>`,
		"fallback": "uix:merchant-fees",
	});
}

export default Component;
