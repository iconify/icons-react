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
		"content": `<style>.b0mfgjbic {
  d: path("m5.5 4.5l3.5 6h6l3.5-6m-6.5 6V15m-3.5 3.5L12 15l3.5 3.5m-9 3h11");
}

.sm_53ibzd {
  d: path("M9.75 4.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sm_53ibzd"/><path class="b0mfgjbic"/></g>`,
		"fallback": "uix-sharp:kid-jumping",
	});
}

export default Component;
