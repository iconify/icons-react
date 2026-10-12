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
		"content": `<style>.e837ahb1c {
  width: 10.5px;
  height: 13.5px;
  x: 6.75px;
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

.m_oz_zbvp {
  d: path("M9.5 7.25v-4.5m5 4.5v-1.5M9.75 11h4.5m-4.5 2.5h4.5M9.75 16h4.5");
}
</style><g class="hntgybcog"><rect class="e837ahb1c"/><path class="m_oz_zbvp"/></g>`,
		"fallback": "iconoven:walkie-talkie",
	});
}

export default Component;
