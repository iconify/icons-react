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
		"content": `<style>.dz6gliidf {
  d: path("m2.5 4.5l10 1l2.5 2v3l-2.5 2l-10 1ZM15 7h3.5v4H15ZM5 4.75v8.5");
}

.lsg4qfbit {
  d: path("M18.5 9c3 0 3.25 4.5 0 5.5c-3 1-4 4.5-1 5h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dz6gliidf"/><path class="lsg4qfbit"/></g>`,
		"fallback": "uix-sharp:toothpaste",
	});
}

export default Component;
