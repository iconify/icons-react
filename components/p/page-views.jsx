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
		"content": `<style>.praehjzlq {
  d: path("M13.9 21.5H3.5v-19h17v11.3M3.5 7h17m-14-2.25h.01m2.74 0h.01M7 11h10M7 14.5h5");
}

.s90850bdm {
  d: path("M14.25 18c1.25-2.25 6.25-2.25 7.5 0c-1.25 2.25-6.25 2.25-7.5 0ZM18 18h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="praehjzlq"/><path class="s90850bdm"/></g>`,
		"fallback": "uix-sharp:page-views",
	});
}

export default Component;
