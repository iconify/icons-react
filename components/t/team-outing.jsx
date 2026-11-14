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
		"content": `<style>.hdf0iubem {
  d: path("m9 19.5l3-6l3 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w42vjbcdr {
  d: path("m12 3.5l9 16H3Z");
}
</style><g class="ulnmmdpxh"><path class="w42vjbcdr"/><path class="hdf0iubem"/></g>`,
		"fallback": "uix-sharp:team-outing",
	});
}

export default Component;
