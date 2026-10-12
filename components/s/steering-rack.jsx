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
		"content": `<style>.e6m1jbc1y {
  cx: 12px;
  cy: 7.25px;
  r: 2.25px;
}

.eswozbbij {
  d: path("M12 5V2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.owdhrkben {
  d: path("M7.5 13.5V15m3-1.5V15m3-1.5V15m3-1.5V15m-12 .75H2.75m16.75 0h1.75");
}

.pc51lyxfu {
  width: 15px;
  height: 4.5px;
  x: 4.5px;
  y: 13.5px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="pc51lyxfu"/><path class="owdhrkben"/><circle class="e6m1jbc1y"/><path class="eswozbbij"/></g>`,
		"fallback": "iconoven:steering-rack",
	});
}

export default Component;
