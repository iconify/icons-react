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

.kxtg1te6n {
  width: 4.16px;
  height: 16.5px;
  x: 9.92px;
  y: 3.75px;
  rx: 1.5px;
}

.tf14ui8ud {
  width: 4.17px;
  height: 16.5px;
  x: 17.08px;
  y: 3.75px;
  rx: 1.5px;
}

.wr13gnc1t {
  width: 4.17px;
  height: 16.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="wr13gnc1t"/><rect class="kxtg1te6n"/><rect class="tf14ui8ud"/></g>`,
		"fallback": "iconoven:layout-columns-four",
	});
}

export default Component;
