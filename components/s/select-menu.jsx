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
		"content": `<style>.stw4lhbvt {
  d: path("m13.5 10.75l2.5 2.5l2.5-2.5");
}

.tnvl6hbxj {
  d: path("M2.5 6h19v12h-19ZM6 12h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tnvl6hbxj"/><path class="stw4lhbvt"/></g>`,
		"fallback": "uix-sharp:select-menu",
	});
}

export default Component;
