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
		"content": `<style>.ndzppditw {
  d: path("M2.5 12C5 7.25 8.25 5.5 12 5.5s7 1.75 9.5 6.5c-2.5 4.75-5.75 6.5-9.5 6.5S5 16.75 2.5 12Z");
}

.nqahmx-hk {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM4 3.5l16 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ndzppditw"/><path class="nqahmx-hk"/></g>`,
		"fallback": "uix-sharp:visibility",
	});
}

export default Component;
