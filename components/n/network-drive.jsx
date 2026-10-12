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
		"content": `<style>.d13cy_fib {
  d: path("M4.75 5.25a2.5 2.5 0 0 1 2.5-2.5h2.6a2 2 0 0 1 1.6.8l.6.7a2 2 0 0 0 1.6.8h3.1a2.5 2.5 0 0 1 2.5 2.5v3.95a2.5 2.5 0 0 1-2.5 2.5h-9.5a2.5 2.5 0 0 1-2.5-2.5Zm7.25 9.5v3M2.75 19.5H10m4.25 0h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ix0sepbgl {
  cx: 12px;
  cy: 19.5px;
  r: 1.5px;
}
</style><g class="hntgybcog"><path class="d13cy_fib"/><circle class="ix0sepbgl"/></g>`,
		"fallback": "iconoven:network-drive",
	});
}

export default Component;
