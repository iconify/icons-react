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
		"content": `<style>.q4wss-31o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 8h14.5A1.75 1.75 0 0 1 21 9.75a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 9.75A1.75 1.75 0 0 1 4.75 8M12 11.5l1.75 1.5l-3.5 2l3.5 2l-3.5 2L12 20.5M4.75 8l3.5-3.5");
}
</style><path class="q4wss-31o"/>`,
		"fallback": "uix:waiters-friend",
	});
}

export default Component;
