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
		"content": `<style>.iflxnubtr {
  d: path("m9 14.5l-2 7l5-3l5 3l-2-7");
}

.u9wuy_bfq {
  d: path("m12 2.75l3.5 1V12a3.5 3.5 0 0 1-7 0V3.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u9wuy_bfq"/><path class="iflxnubtr"/></g>`,
		"fallback": "uix-sharp:sale-ribbon",
	});
}

export default Component;
