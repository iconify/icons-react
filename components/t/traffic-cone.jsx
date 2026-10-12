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

.lo8tqubgh {
  width: 16.5px;
  height: 3.25px;
  x: 3.75px;
  y: 18px;
  rx: 1.25px;
}

.qg-nxvbvo {
  d: path("M10.25 3.75A1 1 0 0 1 11.2 3h1.6a1 1 0 0 1 .95.75L17.65 18H6.35Z");
}

.w8dn8ya4e {
  d: path("M8.75 10.5h6.5m-7.5 4h8.5");
}
</style><g class="hntgybcog"><path class="qg-nxvbvo"/><rect class="lo8tqubgh"/><path class="w8dn8ya4e"/></g>`,
		"fallback": "iconoven:traffic-cone",
	});
}

export default Component;
