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
		"content": `<style>.i30yxvhhg {
  d: path("M10.5 20.5H3v-18h14v9.4M6.5 6h.01m-.01 4h.01m-.01 4h.01M9.5 6h4m-4 4h4m-4 4h2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_nrayb7x {
  d: path("M14.25 16a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM13 22c0-1.1 1.25-1.75 2.75-1.75s2.75.65 2.75 1.75m1.5-7.5a1.5 1.5 0 0 1 0 3");
}
</style><g class="ulnmmdpxh"><path class="i30yxvhhg"/><path class="v_nrayb7x"/></g>`,
		"fallback": "uix-sharp:meeting-agenda",
	});
}

export default Component;
