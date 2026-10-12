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
		"content": `<style>.nbvd3dxpo {
  d: path("M4.63 17.16A9 5.5-35 1 1 19.37 6.84A9 5.5-35 1 1 4.63 17.16Z");
}

.pudhj47xv {
  d: path("m7.49 15.15l1.64-1.14l-.72-1.02l1.44 2.04l-.72-1.02L12 12l-.72-1.02l1.44 2.04L12 12l2.87-2.01l-.72-1.02l1.44 2.04l-.72-1.02l1.64-1.14");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nbvd3dxpo"/><path class="pudhj47xv"/></g>`,
		"fallback": "iconoven:rugby-sharp",
	});
}

export default Component;
