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
		"content": `<style>.fq3z78bdg {
  d: path("M5.5 5.75h13v12.5h-13ZM8.5 9h7m-7 3h7m-7 3H13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jds4z8bpz {
  width: 16.5px;
  height: 3px;
  x: 3.75px;
  y: 18.25px;
  rx: 1.5px;
}

.k4jgzab0f {
  width: 16.5px;
  height: 3px;
  x: 3.75px;
  y: 2.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><path class="fq3z78bdg"/><rect class="k4jgzab0f"/><rect class="jds4z8bpz"/></g>`,
		"fallback": "iconoven:scripture-scroll",
	});
}

export default Component;
