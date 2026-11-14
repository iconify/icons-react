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
		"content": `<style>.c3z1rd30e {
  d: path("M8 10q4-4.5 8 0m-6.5 3.75a2.5 2.5 0 0 1 5 0Z");
}

.tm_pv7b5v {
  d: path("M8 2.5c2 0 2.5 1 4 1s2-1 4-1c2.75 0 4 2 4 5s-1.25 4.5-1.75 7L17.5 20c-.25 1.5-2.25 1.5-2.5 0l-1-2.75c-.5-1-3.5-1-4 0L9 20c-.25 1.5-2.25 1.5-2.5 0l-.75-5.5C5.25 12 4 10.5 4 7.5s1.25-5 4-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tm_pv7b5v"/><path class="c3z1rd30e"/></g>`,
		"fallback": "uix-sharp:pulp-cap",
	});
}

export default Component;
