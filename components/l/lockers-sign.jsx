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
		"content": `<style>.q7u5noiic {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.125 2.5h11.75A2.625 2.625 0 0 1 20.5 5.125v13.75a2.625 2.625 0 0 1-2.625 2.625H6.125A2.625 2.625 0 0 1 3.5 18.875V5.125A2.625 2.625 0 0 1 6.125 2.5M12 2.5v19M6.25 5.25h3M6.25 8h3m5.5-2.75h3m-3 2.75h3m-8.5 4.5V15m5.5-2.5V15");
}
</style><path class="q7u5noiic"/>`,
		"fallback": "uix:lockers-sign",
	});
}

export default Component;
