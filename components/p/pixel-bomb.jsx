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
		"content": `<style>.sif5p_2cy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 9.5h5v2h2v2h1.5v4H15v2h-2v2H8v-2H6v-2H4.5v-4H6v-2h2Zm2.5 0V7h3V4.5H16m0 0h4m-2-2v4");
}
</style><path class="sif5p_2cy"/>`,
		"fallback": "uix-sharp:pixel-bomb",
	});
}

export default Component;
