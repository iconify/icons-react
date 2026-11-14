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
		"content": `<style>.aike6wbnk {
  d: path("M7.75 6.5H5V16h14V6.5h-2.75M11 5.25h2M12 16v2.25M10.25 20a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mvywacbwl {
  d: path("M10.813 2.5h2.375a3.063 3.063 0 0 1 3.062 3.063v4.375A3.063 3.063 0 0 1 13.188 13h-2.375A3.063 3.063 0 0 1 7.75 9.938V5.563A3.063 3.063 0 0 1 10.813 2.5");
}
</style><g class="hntgybcog"><path class="mvywacbwl"/><path class="aike6wbnk"/></g>`,
		"fallback": "uix:phone-clamp",
	});
}

export default Component;
