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
		"content": `<style>.cgisn3btn {
  d: path("M9.5 8.75v9h7.75a1.75 1.75 0 0 1 0 3.5H5.75");
}

.eoenbp1iq {
  cx: 9.5px;
  cy: 4.75px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i9lue-apj {
  d: path("m9.5 10.5l3 3.25L14.75 9");
}
</style><g class="hntgybcog"><circle class="eoenbp1iq"/><path class="cgisn3btn"/><path class="i9lue-apj"/></g>`,
		"fallback": "iconoven:praying-person",
	});
}

export default Component;
