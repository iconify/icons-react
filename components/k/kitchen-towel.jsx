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
		"content": `<style>.hh9r97div {
  d: path("M6.25 9.5h11.5m-11.5 6.25h11.5m-11.5 2.5h11.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p96i22b3o {
  width: 11.5px;
  height: 17px;
  x: 6.25px;
  y: 4.25px;
  rx: 1.5px;
}

.plqt5_m6t {
  d: path("M2.75 4.25h18.5");
}
</style><g class="hntgybcog"><path class="plqt5_m6t"/><rect class="p96i22b3o"/><path class="hh9r97div"/></g>`,
		"fallback": "iconoven:kitchen-towel",
	});
}

export default Component;
