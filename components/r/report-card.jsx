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
		"content": `<style>.c32b_di1j {
  width: 8.5px;
  height: 3.5px;
  x: 7.75px;
  y: 5.75px;
  rx: 1px;
}

.dnp2npbye {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 2.5px;
}

.h_4m51byz {
  d: path("M8.25 13h7.5m-7.5 3.75h4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="dnp2npbye"/><rect class="c32b_di1j"/><path class="h_4m51byz"/></g>`,
		"fallback": "iconoven:report-card",
	});
}

export default Component;
