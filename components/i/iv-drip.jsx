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

.pi0tqvb1q {
  d: path("M8 8.75h3m-1.5 3.5v2.25m0 3v3");
}

.pvdbfablq {
  width: 2.5px;
  height: 3px;
  x: 8.25px;
  y: 14.5px;
  rx: 0.75px;
}

.q41nk5bpt {
  width: 7.5px;
  height: 7px;
  x: 5.75px;
  y: 5.25px;
  rx: 2px;
}

.y4oiyztym {
  d: path("M16 21.25V2.75H9.5v2.5m3.5 16h6");
}
</style><g class="hntgybcog"><path class="y4oiyztym"/><rect class="q41nk5bpt"/><path class="pi0tqvb1q"/><rect class="pvdbfablq"/></g>`,
		"fallback": "iconoven:iv-drip",
	});
}

export default Component;
