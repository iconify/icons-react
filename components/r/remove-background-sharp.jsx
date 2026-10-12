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
		"content": `<style>.h0-gax_xx {
  d: path("M5.5 20.25c0-3.5 2.9-6 6.5-6s6.5 2.5 6.5 6v1h-13z");
}

.h3cltfwzl {
  d: path("M2.75 6.5V2.75H6.5m4 0h3m4 0h3.75V6.5m0 4v3m-18.5-3v3");
}

.la9_y441a {
  cx: 12px;
  cy: 8.25px;
  r: 3px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="h3cltfwzl"/><circle class="la9_y441a"/><path class="h0-gax_xx"/></g>`,
		"fallback": "iconoven:remove-background-sharp",
	});
}

export default Component;
