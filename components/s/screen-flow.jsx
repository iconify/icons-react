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
		"content": `<style>.m9zfw2bjf {
  d: path("m18.75 14.75l1.75 1.75l-1.75 1.75");
}

.shvlebbae {
  d: path("M11.9 21.5H4v-19h11.5v11.6M7.5 6H12M7.5 9h3m-2.25 9h3m3.5 3c0-3 1.75-4.5 5.75-4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="shvlebbae"/><path class="m9zfw2bjf"/></g>`,
		"fallback": "uix-sharp:screen-flow",
	});
}

export default Component;
