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
		"content": `<style>.hnkar88ns {
  width: 13.5px;
  height: 8.5px;
  x: 7.75px;
  y: 2.75px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wn2_mrbje {
  d: path("M7.75 8.25h13.5m-6.75 3V14L8 18.25m-5 0h7v3H3");
}
</style><g class="hntgybcog"><rect class="hnkar88ns"/><path class="wn2_mrbje"/></g>`,
		"fallback": "iconoven:monitor-arm",
	});
}

export default Component;
