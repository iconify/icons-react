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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vbv84mbqq {
  d: path("M11.9 18.5H3v-16h15v11.6");
}

.w5g-qu2hh {
  d: path("M6.5 9.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm4 0l2-2m2 12.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3-1.25l3.75-3.75m-1.5 1.5l1.5 1.5");
}
</style><g class="ulnmmdpxh"><path class="vbv84mbqq"/><path class="w5g-qu2hh"/></g>`,
		"fallback": "uix-sharp:meter-access-key",
	});
}

export default Component;
