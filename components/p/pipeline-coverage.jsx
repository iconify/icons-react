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
		"content": `<style>.vsmchlhav {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h19M5.25 15h.25a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 5.5 21h-.25a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 5.25 15m6.5-3.5H12a1.75 1.75 0 0 1 1.75 1.75v6A1.75 1.75 0 0 1 12 21h-.25A1.75 1.75 0 0 1 10 19.25v-6a1.75 1.75 0 0 1 1.75-1.75m6.5-3.5h.25a1.75 1.75 0 0 1 1.75 1.75v9.5A1.75 1.75 0 0 1 18.5 21h-.25a1.75 1.75 0 0 1-1.75-1.75v-9.5A1.75 1.75 0 0 1 18.25 8");
}
</style><path class="vsmchlhav"/>`,
		"fallback": "uix:pipeline-coverage",
	});
}

export default Component;
