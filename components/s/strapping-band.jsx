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
		"content": `<style>.dmfv5tb1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.625 8h10.75A2.625 2.625 0 0 1 20 10.625v6.75A2.625 2.625 0 0 1 17.375 20H6.625A2.625 2.625 0 0 1 4 17.375v-6.75A2.625 2.625 0 0 1 6.625 8M9 4.5V20m6-15.5V20");
}
</style><path class="dmfv5tb1w"/>`,
		"fallback": "uix:strapping-band",
	});
}

export default Component;
