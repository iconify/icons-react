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
		"content": `<style>.dg640o4pu {
  d: path("M9.25 11a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zrkc3pb-e {
  d: path("m12 2.5l7.5 8.5L12 21.5L4.5 11Z");
}
</style><g class="ulnmmdpxh"><path class="zrkc3pb-e"/><path class="dg640o4pu"/></g>`,
		"fallback": "uix-sharp:marker-diamond",
	});
}

export default Component;
