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
		"content": `<style>.gf5ll8r0l {
  d: path("M4.25 14C6 11 8.75 9.25 12 9.25S18 11 19.75 14c-1.75 3-4.5 4.75-7.75 4.75S6 17 4.25 14Z");
}

.obsscdhly {
  cx: 12px;
  cy: 14px;
  r: 2px;
}

.s5cxhbcmn {
  d: path("M9 7.5a7 7 0 0 1 6 0M6.5 5.25a11 11 0 0 1 11 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="gf5ll8r0l"/><circle class="obsscdhly"/><path class="s5cxhbcmn"/></g>`,
		"fallback": "iconoven:reach-sharp",
	});
}

export default Component;
