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
		"content": `<style>.tsv6224au {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.741 14.5h8.518a1.75 1.75 0 0 1 1.697 2.174l-.875 3.5a1.75 1.75 0 0 1-1.697 1.326H8.616a1.75 1.75 0 0 1-1.697-1.326l-.875-3.5A1.75 1.75 0 0 1 7.741 14.5M8.5 3l1.75 2L12 2.5L13.75 5l1.75-2v2.5a3.5 3.5 0 0 1-7 0ZM12 9v5.5m0 0q0-3.5 4.5-4");
}
</style><path class="tsv6224au"/>`,
		"fallback": "uix:potted-flower",
	});
}

export default Component;
