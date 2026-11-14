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
		"content": `<style>.xf2alp04p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 4.5h11.5a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3L2.5 12L6 9.5v-3a2 2 0 0 1 2-2Zm2 5.5h7.5M10 14h4.5");
}
</style><path class="xf2alp04p"/>`,
		"fallback": "uix-sharp:tooltip-left",
	});
}

export default Component;
