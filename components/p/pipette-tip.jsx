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
		"content": `<style>.tpaja4bpz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.5h9V6l-2 2l-1.75 13.5h-1.5L9.5 8l-2-2Zm2 5.5h5");
}
</style><path class="tpaja4bpz"/>`,
		"fallback": "uix-sharp:pipette-tip",
	});
}

export default Component;
