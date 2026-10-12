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

.meggsqlav {
  width: 8px;
  height: 10.5px;
  x: 13.25px;
  y: 6.75px;
  rx: 2px;
}

.ocvhuaccq {
  d: path("M6.75 14.5v-4.25M5 12l1.75-1.75L8.5 12m7.25 0h3M5 20.75h14");
}

.z3x0zqbqu {
  width: 8px;
  height: 10.5px;
  x: 2.75px;
  y: 6.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="z3x0zqbqu"/><rect class="meggsqlav"/><path class="ocvhuaccq"/></g>`,
		"fallback": "iconoven:sticky-keys",
	});
}

export default Component;
