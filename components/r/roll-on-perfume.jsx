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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.veqi1obst {
  d: path("M8.5 9h7v12.5h-7Zm1-3h5v3h-5Z");
}

.wdisznb8w {
  d: path("M10.25 4.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM8.5 13h7m-7 5h7");
}
</style><g class="ulnmmdpxh"><path class="veqi1obst"/><path class="wdisznb8w"/></g>`,
		"fallback": "uix-sharp:roll-on-perfume",
	});
}

export default Component;
