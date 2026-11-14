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
		"content": `<style>.g0c7edc2n {
  d: path("M4.5 5h15a2 2 0 0 1 2 2v2.5a2.5 2.5 0 0 0 0 5V17a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-2.5a2.5 2.5 0 0 0 0-5V7a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x6bia7bab {
  d: path("m12 7.75l1.25 2.75l3 .25L14 13l.75 3L12 14.25L9.25 16l.75-3l-2.25-2.25l3-.25Z");
}
</style><g class="ulnmmdpxh"><path class="g0c7edc2n"/><path class="x6bia7bab"/></g>`,
		"fallback": "uix-sharp:lucky-draw",
	});
}

export default Component;
