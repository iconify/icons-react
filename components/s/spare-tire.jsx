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
		"content": `<style>.qqb294baw {
  d: path("M3.5 11.5a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0ZM4 20h16");
}

.rvrq3-biv {
  d: path("M7.5 11.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0ZM12 10h.01m-1.26 2.5h.01m2.49 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qqb294baw"/><path class="rvrq3-biv"/></g>`,
		"fallback": "uix-sharp:spare-tire",
	});
}

export default Component;
