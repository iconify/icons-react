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
		"content": `<style>.d4nw0_bhx {
  d: path("M6 14.5L7.75 16l1.75-1.5l1.75 1.5L13 14.5");
}

.nrous9gzn {
  d: path("M3 4.5h13.5v15H3ZM16.5 8H18a2.5 2.5 0 0 1 2.5 2.5V13a2.5 2.5 0 0 1-2.5 2.5h-1.5m-10.75-6h2.5m3 0h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nrous9gzn"/><path class="d4nw0_bhx"/></g>`,
		"fallback": "uix-sharp:tiki-mug",
	});
}

export default Component;
