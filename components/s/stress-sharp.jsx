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
		"content": `<style>.ac43-ok7d {
  d: path("M5 21.25h15v-1c0-2.6-3.6-4.5-8-4.5s-8 1.9-8 4.5v1z");
}

.eqgjd28gw {
  d: path("M4.75 5.5L7.17 3l2.41 2.5L12 3l2.42 2.5L16.83 3l2.42 2.5");
}

.qi0czrdcc {
  cx: 12px;
  cy: 10.5px;
  r: 3px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="eqgjd28gw"/><circle class="qi0czrdcc"/><path class="ac43-ok7d"/></g>`,
		"fallback": "iconoven:stress-sharp",
	});
}

export default Component;
