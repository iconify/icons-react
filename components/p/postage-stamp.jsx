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
		"content": `<style>.ae5pkf0rt {
  d: path("M8.5 17.75h7");
}

.gd-nxwb-k {
  width: 9px;
  height: 8.5px;
  x: 7.5px;
  y: 6.5px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jer0ycbyt {
  d: path("M4.25 3.25h1.19a.75.75 0 0 0 1.5 0h2.37a.75.75 0 0 0 1.5 0h2.38a.75.75 0 0 0 1.5 0h2.37a.75.75 0 0 0 1.5 0h1.19v1a.75.75 0 0 0 0 1.5v2a.75.75 0 0 0 0 1.5v2a.75.75 0 0 0 0 1.5v2a.75.75 0 0 0 0 1.5v2a.75.75 0 0 0 0 1.5v1h-1.19a.75.75 0 0 0-1.5 0h-2.37a.75.75 0 0 0-1.5 0h-2.38a.75.75 0 0 0-1.5 0H6.94a.75.75 0 0 0-1.5 0H4.25v-1a.75.75 0 0 0 0-1.5v-2a.75.75 0 0 0 0-1.5v-2a.75.75 0 0 0 0-1.5v-2a.75.75 0 0 0 0-1.5v-2a.75.75 0 0 0 0-1.5Z");
}
</style><g class="hntgybcog"><path class="jer0ycbyt"/><rect class="gd-nxwb-k"/><path class="ae5pkf0rt"/></g>`,
		"fallback": "iconoven:postage-stamp",
	});
}

export default Component;
