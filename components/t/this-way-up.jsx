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
		"content": `<style>.ky8rhmm9y {
  d: path("M5 4.5h14v15H5ZM12 8v8");
}

.nthnoib9k {
  d: path("m9 11l3-3l3 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ky8rhmm9y"/><path class="nthnoib9k"/></g>`,
		"fallback": "uix-sharp:this-way-up",
	});
}

export default Component;
