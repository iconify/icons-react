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
		"content": `<style>.cj3-e79pp {
  d: path("M18.5 13.25V11.5m0 6.75V20");
}

.er8xuq0mh {
  width: 5.5px;
  height: 5px;
  x: 15.75px;
  y: 13.25px;
  rx: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tjmqpacvo {
  d: path("M5.75 3h12q2 0 2 2v2q0 2-2 2h-3q-2 0-2 2v1q0 2-2 2h-5q-2 0-2-2V5q0-2 2-2m-3 14.25h10");
}
</style><g class="hntgybcog"><path class="tjmqpacvo"/><rect class="er8xuq0mh"/><path class="cj3-e79pp"/></g>`,
		"fallback": "iconoven:laptop-and-smartwatch",
	});
}

export default Component;
