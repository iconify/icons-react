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
		"content": `<style>.e--1ehb5o {
  d: path("M6.25 9c6 0 5.5-3 11.5-3m-11.5 9c6 0 5.5 3 11.5 3");
}

.foujtlbte {
  width: 3.5px;
  height: 6.5px;
  x: 17.75px;
  y: 2.75px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kebrm_8wg {
  width: 3.5px;
  height: 6.5px;
  x: 17.75px;
  y: 14.75px;
  rx: 1px;
}

.oij_xbccr {
  width: 3.5px;
  height: 12.5px;
  x: 2.75px;
  y: 5.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="oij_xbccr"/><rect class="foujtlbte"/><rect class="kebrm_8wg"/><path class="e--1ehb5o"/></g>`,
		"fallback": "iconoven:sankey",
	});
}

export default Component;
