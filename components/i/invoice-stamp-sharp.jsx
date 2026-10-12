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
		"content": `<style>.bf9_qabtn {
  cx: 17.5px;
  cy: 17.5px;
  r: 3.5px;
}

.oiaus1h-t {
  d: path("M6 2.75h9.75v8.49a6.5 6.5 0 0 0-3.56 10.01H3.75V2.75zm1 4.5h5M7 10.5h5m-5 3.25h3");
}

.rlb2dlbij {
  d: path("m16 17.5l1.25 1.25l2.5-2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="oiaus1h-t"/><circle class="bf9_qabtn"/><path class="rlb2dlbij"/></g>`,
		"fallback": "iconoven:invoice-stamp-sharp",
	});
}

export default Component;
