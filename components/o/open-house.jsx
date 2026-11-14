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
		"content": `<style>.g6-inz88q {
  d: path("M15.5 6.5v-3H18v5M9 14h4.5v7H9Zm0 0l-4.25-1.75v7.25L9 21Z");
}

.t-peadbli {
  d: path("m3 11l9-7.5l9 7.5v10H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t-peadbli"/><path class="g6-inz88q"/></g>`,
		"fallback": "uix-sharp:open-house",
	});
}

export default Component;
