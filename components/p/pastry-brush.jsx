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

.hxctz3qvq {
  width: 9px;
  height: 3px;
  x: 7.5px;
  y: 9.75px;
  rx: 1px;
}

.ob_3wxbim {
  width: 3.5px;
  height: 7px;
  x: 10.25px;
  y: 2.75px;
  rx: 1.75px;
}

.v_ziurbxq {
  d: path("M9 12.75L8 21m4-8.25V21m3-8.25L16 21");
}
</style><g class="hntgybcog"><rect class="ob_3wxbim"/><rect class="hxctz3qvq"/><path class="v_ziurbxq"/></g>`,
		"fallback": "iconoven:pastry-brush",
	});
}

export default Component;
