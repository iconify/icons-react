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
		"content": `<style>.a_rd3abun {
  d: path("M3.75 16.5V7.25H9.5m4.5 0h6.25v9.25m-7.75-11l4-2.75");
}

.cm3euzbym {
  width: 18.5px;
  height: 4.75px;
  x: 2.75px;
  y: 16.5px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ucsa_-ixb {
  width: 10.5px;
  height: 3px;
  x: 6.75px;
  y: 13.5px;
  rx: 0.5px;
}

.zkpxinb7b {
  width: 4.5px;
  height: 3.5px;
  x: 9.5px;
  y: 5.5px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><rect class="cm3euzbym"/><path class="a_rd3abun"/><rect class="zkpxinb7b"/><rect class="ucsa_-ixb"/></g>`,
		"fallback": "iconoven:tile-cutter",
	});
}

export default Component;
