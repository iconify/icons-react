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
		"content": `<style>.hajmoyu0i {
  cx: 12px;
  cy: 8.75px;
  r: 2.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ry1ztcbjt {
  width: 11px;
  height: 5.25px;
  x: 6.5px;
  y: 13.5px;
  rx: 1px;
}

.sj0eok4lr {
  d: path("M3.75 21.25h16.5M2.75 10L12 2.75L21.25 10");
}
</style><g class="hntgybcog"><circle class="hajmoyu0i"/><rect class="ry1ztcbjt"/><path class="sj0eok4lr"/></g>`,
		"fallback": "iconoven:remote-worker",
	});
}

export default Component;
