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
		"content": `<style>.fnqhv3q0q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21.5V3m0 .5h9l-2 3.25L13 10H4m9.5 7H21m-2.5-2.5L21 17l-2.5 2.5");
}
</style><path class="fnqhv3q0q"/>`,
		"fallback": "uix-sharp:milestone-upcoming",
	});
}

export default Component;
