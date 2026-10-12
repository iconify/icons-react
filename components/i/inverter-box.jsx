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
		"content": `<style>.a_-q_pb0z {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 3px;
}

.gtmmrqg1b {
  d: path("m5.5 18.5l13-13M6 7.25h5M6 9.5h1.5m2 0H11m1.75 6.25c.9-2 1.85-2 2.75 0s1.85 2 2.75 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="a_-q_pb0z"/><path class="gtmmrqg1b"/></g>`,
		"fallback": "iconoven:inverter-box",
	});
}

export default Component;
