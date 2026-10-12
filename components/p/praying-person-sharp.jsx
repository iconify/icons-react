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

.i9lue-apj {
  d: path("m9.5 10.5l3 3.25L14.75 9");
}

.u8xnuhq8x {
  d: path("M9.5 8.75v9H19v3.5H5.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="eoenbp1iq"/><path class="u8xnuhq8x"/><path class="i9lue-apj"/></g>`,
		"fallback": "iconoven:praying-person-sharp",
	});
}

export default Component;
