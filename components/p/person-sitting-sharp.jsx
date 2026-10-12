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
		"content": `<style>.eoenbp1iq {
  cx: 9.5px;
  cy: 4.75px;
  r: 2px;
}

.nz70flb9l {
  d: path("M9.5 9.5v6.25h5.25v5.5m-5.25-10l3 1.75M6 9.75v11.5m0-3h5.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="eoenbp1iq"/><path class="nz70flb9l"/></g>`,
		"fallback": "iconoven:person-sitting-sharp",
	});
}

export default Component;
