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
		"content": `<style>.f1fo0ebxp {
  d: path("M14.5 2.5v19m5.5-19v19M14.5 7H20m-5.5 5H20m-5.5 5H20M3.75 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w-2xssboo {
  d: path("m6.25 7l1.25 7L6 21.5m.75-11.75L14.5 7m-7 7l4-1.5l3 4.5");
}
</style><g class="ulnmmdpxh"><path class="f1fo0ebxp"/><path class="w-2xssboo"/></g>`,
		"fallback": "uix-sharp:person-climbing-ladder",
	});
}

export default Component;
