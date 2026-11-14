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
		"content": `<style>.ub1jg5_1h {
  d: path("M14.5 18a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm1.75 0h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vf0djpb3u {
  d: path("M3.5 21.5v-19m0 2.5h17m-8.8 13.5H6.5v-11H20V12M9 5v2.5M17.5 5v2.5");
}
</style><g class="ulnmmdpxh"><path class="vf0djpb3u"/><path class="ub1jg5_1h"/></g>`,
		"fallback": "uix-sharp:short-sale",
	});
}

export default Component;
