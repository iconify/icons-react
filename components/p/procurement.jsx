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
		"content": `<style>.hjxtt2cfv {
  d: path("M3.75 13.5h16.5M12 2.75V6.5M9.75 4.25L12 6.5l2.25-2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o_yttac8f {
  width: 16.5px;
  height: 11.75px;
  x: 3.75px;
  y: 9.5px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="o_yttac8f"/><path class="hjxtt2cfv"/></g>`,
		"fallback": "iconoven:procurement",
	});
}

export default Component;
