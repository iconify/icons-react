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
		"content": `<style>.bopw041cc {
  width: 18.5px;
  height: 4.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jve4hdceg {
  d: path("M8 10v6m4-6v8m4-8v6M2.75 21.25c1.54 0 1.54-1.25 3.08-1.25s1.54 1.25 3.08 1.25S10.45 20 11.99 20s1.54 1.25 3.08 1.25S16.61 20 18.15 20s1.54 1.25 3.08 1.25");
}
</style><g class="hntgybcog"><rect class="bopw041cc"/><path class="jve4hdceg"/></g>`,
		"fallback": "iconoven:waterfall",
	});
}

export default Component;
