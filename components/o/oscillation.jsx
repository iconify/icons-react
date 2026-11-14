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
		"content": `<style>.vfijxvd7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 4h6m-3 0v11m-2.5 2.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-2.75-1a13.5 13.5 0 0 1-4-2.75m0 2.5v-2.5h2.5m12 2.75a13.5 13.5 0 0 0 4-2.75m0 2.5v-2.5h-2.5");
}
</style><path class="vfijxvd7o"/>`,
		"fallback": "uix-sharp:oscillation",
	});
}

export default Component;
