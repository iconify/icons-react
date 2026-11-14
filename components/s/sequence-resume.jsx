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
		"content": `<style>.ikcxdfx3c {
  d: path("m10 2.5l2 2l-2 2M10 9l5.5 3.5L10 16Z");
}

.kr71oacge {
  d: path("M20 12.5a8 8 0 1 1-8-8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kr71oacge"/><path class="ikcxdfx3c"/></g>`,
		"fallback": "uix-sharp:sequence-resume",
	});
}

export default Component;
