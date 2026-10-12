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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o5grrub_r {
  cx: 7px;
  cy: 7px;
  r: 1.5px;
}

.t0u1xzm4y {
  d: path("M10.5 7H17M6.5 12h11m-11 4h7");
}
</style><g class="hntgybcog"><rect class="a_-q_pb0z"/><circle class="o5grrub_r"/><path class="t0u1xzm4y"/></g>`,
		"fallback": "iconoven:post-card",
	});
}

export default Component;
