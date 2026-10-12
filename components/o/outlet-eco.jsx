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

.jugg-dbvr {
  width: 15px;
  height: 18.5px;
  x: 4.5px;
  y: 2.75px;
  rx: 3.5px;
}

.jw-jxxbop {
  d: path("M9.5 6.25v3m5-3v3M8.75 18c.25-3.32 1.95-4.75 6.5-4.75C15 16.57 13.3 18 8.75 18");
}
</style><g class="hntgybcog"><rect class="jugg-dbvr"/><path class="jw-jxxbop"/></g>`,
		"fallback": "iconoven:outlet-eco",
	});
}

export default Component;
