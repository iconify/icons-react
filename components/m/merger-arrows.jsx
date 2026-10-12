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
		"content": `<style>.cl5sul6sk {
  d: path("m5.75 10.75l3.5 3.5m0-2.75v2.75H6.5m11.75-3.5l-3.5 3.5m0-2.75v2.75h2.75");
}

.dc8-kybzd {
  width: 6px;
  height: 6px;
  x: 2.75px;
  y: 2.75px;
  rx: 1.5px;
}

.dkstmzb6d {
  width: 7.5px;
  height: 5.5px;
  x: 8.25px;
  y: 15.75px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tf7-o_9ab {
  width: 6px;
  height: 6px;
  x: 15.25px;
  y: 2.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="dc8-kybzd"/><rect class="tf7-o_9ab"/><path class="cl5sul6sk"/><rect class="dkstmzb6d"/></g>`,
		"fallback": "iconoven:merger-arrows",
	});
}

export default Component;
