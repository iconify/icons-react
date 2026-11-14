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
		"content": `<style>.jx26lzbqn {
  d: path("M4.5 2.5h15v19h-15Zm3 4h9");
}

.r9g5c-cjq {
  d: path("m12 9.5l1.25 2.75l3 .25L14 14.75l.75 3L12 16l-2.75 1.75l.75-3l-2.25-2.25l3-.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jx26lzbqn"/><path class="r9g5c-cjq"/></g>`,
		"fallback": "uix-sharp:magazine-star",
	});
}

export default Component;
