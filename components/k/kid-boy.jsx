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
		"content": `<style>.m-wd0724z {
  d: path("M7.75 6c2.25.5 5 0 7-2.5M9 15.5l-2.5 3m8.5-3l2.5 3");
}

.oob5461dn {
  d: path("M7.75 6.75a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0ZM9 18.5V16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.5Zm1.5 0v3m3-3v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oob5461dn"/><path class="m-wd0724z"/></g>`,
		"fallback": "uix-sharp:kid-boy",
	});
}

export default Component;
