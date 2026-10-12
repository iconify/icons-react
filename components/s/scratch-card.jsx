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
		"content": `<style>.dens3qjox {
  width: 12.5px;
  height: 7.5px;
  x: 5.75px;
  y: 8.25px;
  rx: 1.25px;
}

.dlxz3wbik {
  d: path("M9 12c1-1 2 1 3 0s2 1 3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ucxu3gbut {
  width: 18.5px;
  height: 14.5px;
  x: 2.75px;
  y: 4.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="ucxu3gbut"/><rect class="dens3qjox"/><path class="dlxz3wbik"/></g>`,
		"fallback": "iconoven:scratch-card",
	});
}

export default Component;
