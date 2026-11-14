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
		"content": `<style>.jsuac-tha {
  d: path("m12.75 7.25l-2 3.75h2.5l-2 3.75");
}

.n0bp65b1i {
  d: path("M4 2.5h16v19H4Zm6.5 16h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n0bp65b1i"/><path class="jsuac-tha"/></g>`,
		"fallback": "uix-sharp:tablet-charging",
	});
}

export default Component;
