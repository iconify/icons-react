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
		"content": `<style>.mee2o7qts {
  d: path("M15.5 17.5L18 15l2.5 2.5");
}

.p2n0t-bws {
  d: path("M14.206 20.13L8.5 18.5l-6 2v-15l6-2l7 2l6-2v11.071M8.5 3.5v15m7-13v6.7M18 21v-6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p2n0t-bws"/><path class="mee2o7qts"/></g>`,
		"fallback": "uix-sharp:map-heading-up",
	});
}

export default Component;
