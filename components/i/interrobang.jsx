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
		"content": `<style>.hjz77jb_c {
  d: path("M7.75 8a4.25 4.25 0 1 1 6.6 3.55c-1.4.9-2.35 1.95-2.35 3.7m0-8.75v8.75");
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
</style><g class="hntgybcog"><path class="hjz77jb_c"/><circle class="ix0sepbgl"/></g>`,
		"fallback": "iconoven:interrobang",
	});
}

export default Component;
