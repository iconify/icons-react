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
		"content": `<style>.faxao3_aj {
  d: path("M18.25 4.25v1.5l1 .75");
}

.hhycw79tw {
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

.iczfzybzk {
  cx: 18.25px;
  cy: 5.75px;
  r: 3px;
}

.iorq_lb7e {
  d: path("m6 10.75l3.65 2.75c.8.6 1.9.6 2.7 0L16 10.75");
}
</style><g class="hntgybcog"><rect class="hhycw79tw"/><path class="iorq_lb7e"/><circle class="iczfzybzk"/><path class="faxao3_aj"/></g>`,
		"fallback": "iconoven:mail-schedule",
	});
}

export default Component;
