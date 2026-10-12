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
		"content": `<style>.xn6dcwbir {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 4.75h3.75v1.5h-1v5.1c2.1.75 3.5 2.6 3.5 4.9c0 2.75-2 4.75-4.75 4.75s-4.75-2-4.75-4.75c0-2.3 1.4-4.15 3.5-4.9v-5.1h-1v-1.5zm2.25-.5l3.5-1.5");
}
</style><path class="xn6dcwbir"/>`,
		"fallback": "iconoven:kohl-surma-sharp",
	});
}

export default Component;
