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
		"content": `<style>.x8ithabdy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 18.5v-14a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v14Zm0 0l-1.75 3h13l-1.75-3M10.25 6v9m3.5-9v9");
}
</style><path class="x8ithabdy"/>`,
		"fallback": "uix-sharp:tower-fan",
	});
}

export default Component;
