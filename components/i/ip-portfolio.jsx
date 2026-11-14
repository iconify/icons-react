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
		"content": `<style>.hj46on3bd {
  d: path("M13.237 12.013a1.75 1.75 0 1 1-2.474 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o3vip2vhj {
  d: path("M2.5 5A1.5 1.5 0 0 1 4 3.5h5L11 6h9a1.5 1.5 0 0 1 1.5 1.5V19a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 19Z");
}

.sywkcncgs {
  d: path("M8.25 13.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}
</style><g class="hntgybcog"><path class="o3vip2vhj"/><path class="sywkcncgs"/><path class="hj46on3bd"/></g>`,
		"fallback": "uix:ip-portfolio",
	});
}

export default Component;
