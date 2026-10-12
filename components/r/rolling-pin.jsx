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

.kfrp_y4xt {
  d: path("M9.75 8v8m4.5-8v8m-11.5-4h3.5m11.5 0h3.5");
}

.zmib2rbfy {
  width: 11.5px;
  height: 8px;
  x: 6.25px;
  y: 8px;
  rx: 3px;
}
</style><g class="hntgybcog"><rect class="zmib2rbfy"/><path class="kfrp_y4xt"/></g>`,
		"fallback": "iconoven:rolling-pin",
	});
}

export default Component;
