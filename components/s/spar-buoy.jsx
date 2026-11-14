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
		"content": `<style>.vlvy-ibqe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l3.5 5h-7Zm-9.5 17q2-2 4 0t4 0v-12h3v12q2-2 4 0t4 0");
}
</style><path class="vlvy-ibqe"/>`,
		"fallback": "uix-sharp:spar-buoy",
	});
}

export default Component;
