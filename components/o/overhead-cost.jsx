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
		"content": `<style>.zzyqhgbgt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 16h5.75a2 2 0 0 1 2 2a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2a2 2 0 0 1 2-2M6 12h5.75a2 2 0 0 1 2 2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2a2 2 0 0 1 2-2M5 8h5.75a2 2 0 0 1 2 2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2a2 2 0 0 1 2-2m1.5-4h5.75a2 2 0 0 1 2 2a2 2 0 0 1-2 2H6.5a2 2 0 0 1-2-2a2 2 0 0 1 2-2m10.25 13.5h2.5A1.75 1.75 0 0 1 21 19.25v.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 15 19.75v-.5a1.75 1.75 0 0 1 1.75-1.75m-.25 0v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><path class="zzyqhgbgt"/>`,
		"fallback": "uix:overhead-cost",
	});
}

export default Component;
