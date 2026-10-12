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
		"content": `<style>.e09ltnbrf {
  d: path("M10.5 9h3m-6 9v3m9-3v3");
}

.ee7li48xj {
  width: 6px;
  height: 12px;
  x: 4.5px;
  y: 3px;
  rx: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m6qoqzwsf {
  width: 6px;
  height: 12px;
  x: 13.5px;
  y: 3px;
  rx: 3px;
}
</style><g class="hntgybcog"><rect class="ee7li48xj"/><rect class="m6qoqzwsf"/><path class="e09ltnbrf"/></g>`,
		"fallback": "iconoven:jetpack-space",
	});
}

export default Component;
