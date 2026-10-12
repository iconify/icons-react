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
		"content": `<style>.et2_-pbzq {
  d: path("m13.5 18.75l2.5 2.5");
}

.f90gk5b2m {
  cx: 11px;
  cy: 16.25px;
  r: 3.5px;
}

.noim-rbgv {
  d: path("M2.75 3.75h18.5v6H2.75zm4 4.5l1.5-3m1.25 3l1.5-3m1.75 1.5h5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="noim-rbgv"/><circle class="f90gk5b2m"/><path class="et2_-pbzq"/></g>`,
		"fallback": "iconoven:url-scan-sharp",
	});
}

export default Component;
