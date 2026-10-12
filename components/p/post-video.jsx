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

.ogqss9isv {
  d: path("M10.5 7H17M2.75 10.5h18.5M10.5 13.4v4.2a.75.75 0 0 0 1.15.65l3.25-2.1a.75.75 0 0 0 0-1.3l-3.25-2.1a.75.75 0 0 0-1.15.65");
}
</style><g class="hntgybcog"><rect class="a_-q_pb0z"/><circle class="o5grrub_r"/><path class="ogqss9isv"/></g>`,
		"fallback": "iconoven:post-video",
	});
}

export default Component;
