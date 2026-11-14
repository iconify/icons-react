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
		"content": `<style>.hx37ifcyb {
  d: path("M5.5 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm6.25-1.25a3.5 3.5 0 0 1 6.5 0");
}

.oe0-ciqrn {
  d: path("m13.25 14l-1.5-.75l-.75 1.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yot951bfk {
  d: path("m2 12l4.5-7H20q2 0 2 2v10q0 2-2 2H6.5Z");
}

.z0lo1sxzz {
  d: path("m16.75 10l1.5.75l.75-1.5Zm1.5 3.25a3.5 3.5 0 0 1-6.5 0");
}
</style><g class="ulnmmdpxh"><path class="yot951bfk"/><path class="hx37ifcyb"/><path class="z0lo1sxzz"/><path class="oe0-ciqrn"/></g>`,
		"fallback": "uix-sharp:recycled-content",
	});
}

export default Component;
