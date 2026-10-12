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
		"content": `<style>.edrrvhbbp {
  width: 6.5px;
  height: 8px;
  x: 14.75px;
  y: 2.75px;
  rx: 1.25px;
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

.iorq_lb7e {
  d: path("m6 10.75l3.65 2.75c.8.6 1.9.6 2.7 0L16 10.75");
}

.tvh6s4bcg {
  d: path("M16.75 5.25h2.5m-2.5 2.5h1.5");
}
</style><g class="hntgybcog"><rect class="hhycw79tw"/><path class="iorq_lb7e"/><rect class="edrrvhbbp"/><path class="tvh6s4bcg"/></g>`,
		"fallback": "iconoven:mail-draft",
	});
}

export default Component;
