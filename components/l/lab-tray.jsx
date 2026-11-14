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
		"content": `<style>.a9epszn8r {
  d: path("M5.295 13.5h13.41A1.727 1.727 0 0 1 20.25 16l-.766 1.533a1.75 1.75 0 0 1-1.566.967H6.082a1.75 1.75 0 0 1-1.566-.967L3.75 16a1.727 1.727 0 0 1 1.545-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ldhgrdb0a {
  d: path("M5.5 13.5V6h5v7.5m3 0V6h5v7.5");
}
</style><g class="hntgybcog"><path class="a9epszn8r"/><path class="ldhgrdb0a"/></g>`,
		"fallback": "uix:lab-tray",
	});
}

export default Component;
