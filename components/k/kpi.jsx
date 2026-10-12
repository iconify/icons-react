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
		"content": `<style>.atamzkedl {
  width: 4px;
  height: 6px;
  x: 2.75px;
  y: 15.25px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lew1ybchd {
  d: path("M3.25 10.25L8.5 5.5l3 2.5l4.75-4.75m-2.75-.5h2.75V5.5");
}

.t0tyu4j6t {
  width: 4px;
  height: 10px;
  x: 10px;
  y: 11.25px;
  rx: 1.25px;
}

.xa-di9t7h {
  width: 4px;
  height: 12.5px;
  x: 17.25px;
  y: 8.75px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><rect class="atamzkedl"/><rect class="t0tyu4j6t"/><rect class="xa-di9t7h"/><path class="lew1ybchd"/></g>`,
		"fallback": "iconoven:kpi",
	});
}

export default Component;
