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
		"content": `<style>.gg4c3w6st {
  d: path("M9.25 6.25v-2a1.5 1.5 0 0 1 1.5-1.5h2.5a1.5 1.5 0 0 1 1.5 1.5v2M9.5 9.75v6m5-6v6m-5.75 3.5v2m6.5-2v2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.toooign2x {
  width: 12.5px;
  height: 13px;
  x: 5.75px;
  y: 6.25px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="toooign2x"/><path class="gg4c3w6st"/></g>`,
		"fallback": "iconoven:luggage",
	});
}

export default Component;
