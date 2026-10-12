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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.la5qfrrxr {
  width: 18.5px;
  height: 13.5px;
  x: 2.75px;
  y: 5.25px;
  rx: 2.5px;
}

.njsf1pbed {
  d: path("M6.25 9.25v5.5m6-5a1.75 1.5 0 0 0-1.5-.5h-.5a1.4 1.4 0 0 0 0 2.75h.5a1.4 1.4 0 0 1 0 2.75h-.5a1.75 1.5 0 0 1-1.5-.5m9-2.25a1.75 2.75 0 1 1-3.5 0a1.75 2.75 0 1 1 3.5 0");
}
</style><g class="hntgybcog"><rect class="la5qfrrxr"/><path class="njsf1pbed"/></g>`,
		"fallback": "iconoven:iso-setting",
	});
}

export default Component;
