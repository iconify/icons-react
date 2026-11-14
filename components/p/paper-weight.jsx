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
		"content": `<style>.bx3757bie {
  d: path("M6.75 18.25a5.25 5.25 0 0 1 10.5 0Z");
}

.obwko8brr {
  d: path("M4 2.5h16v19H4Zm3 4h10M7 10h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="obwko8brr"/><path class="bx3757bie"/></g>`,
		"fallback": "uix-sharp:paper-weight",
	});
}

export default Component;
