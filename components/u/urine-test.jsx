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
		"content": `<style>.jlw-4bbqw {
  d: path("m4.5 9.5l2 10.5c.15.9.9 1.5 1.75 1.5h7.5c.85 0 1.6-.6 1.75-1.5l2-10.5M6 14h1.8m9.1 0H18");
}

.krtfmdh_e {
  d: path("m14.985 2.409l2.819 1.026l-4.789 13.156l-2.819-1.026Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jlw-4bbqw"/><path class="krtfmdh_e"/></g>`,
		"fallback": "uix-sharp:urine-test",
	});
}

export default Component;
