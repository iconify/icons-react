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
		"content": `<style>.cme6a6oro {
  width: 8px;
  height: 3px;
  x: 8px;
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

.vri7p9q0c {
  d: path("M9 9.5v8m3-8v8m3-8v8");
}

.xofj2pbrz {
  width: 13.5px;
  height: 15.5px;
  x: 5.25px;
  y: 5.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="cme6a6oro"/><rect class="xofj2pbrz"/><path class="vri7p9q0c"/></g>`,
		"fallback": "iconoven:oil-filter",
	});
}

export default Component;
