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
		"content": `<style>.atl31lbek {
  d: path("M2.75 15.25a6.5 6.5 0 0 1 6.5-6.5h5.5a6.5 6.5 0 0 1 6.5 6.5v6H2.75v-3Z");
}

.t3wpecpwg {
  cx: 9.25px;
  cy: 15px;
  r: 3.25px;
}

.u9ss38v1g {
  d: path("M16.75 12.25v3.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="atl31lbek"/><circle class="t3wpecpwg"/><path class="u9ss38v1g"/></g>`,
		"fallback": "iconoven:trackball-sharp",
	});
}

export default Component;
