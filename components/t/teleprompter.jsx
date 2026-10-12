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
		"content": `<style>.f4mi62beh {
  d: path("M6 7h7M6 9.75h7M6 12.5h4.5m6.5.5V7m-1.75 1.75L17 7l1.75 1.75m-6.75 8v4.5m-3.75 0h7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.prgd5lb5c {
  width: 18.5px;
  height: 14px;
  x: 2.75px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="prgd5lb5c"/><path class="f4mi62beh"/></g>`,
		"fallback": "iconoven:teleprompter",
	});
}

export default Component;
