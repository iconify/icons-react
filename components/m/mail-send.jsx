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
		"content": `<style>.hhycw79tw {
  width: 14.5px;
  height: 12px;
  x: 2.75px;
  y: 7.25px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v3luf5bwj {
  d: path("m6 10.75l3.65 2.75c.8.6 1.9.6 2.7 0L16 10.75M15.75 5h4.75m-2-2.25L20.75 5L18.5 7.25");
}
</style><g class="hntgybcog"><rect class="hhycw79tw"/><path class="v3luf5bwj"/></g>`,
		"fallback": "iconoven:mail-send",
	});
}

export default Component;
