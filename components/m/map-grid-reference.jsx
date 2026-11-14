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
		"content": `<style>.aic6yg3oj {
  d: path("m2.5 5.5l6-2l7 2l6-2v15l-6 2l-7-2l-6 2Zm6-2v15m7-13v15M2.5 12h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yeci_sbav {
  fill: currentColor;
  d: path("M10.75 14.5h2.5V17h-2.5Z");
}
</style><g class="ulnmmdpxh"><path class="aic6yg3oj"/><path class="yeci_sbav"/></g>`,
		"fallback": "uix-sharp:map-grid-reference",
	});
}

export default Component;
