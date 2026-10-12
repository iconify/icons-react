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

.l9c52dskd {
  width: 18.5px;
  height: 2.25px;
  x: 2.75px;
  y: 14.5px;
  rx: 0.5px;
}

.rytaitbxx {
  d: path("M7 6.25v13.5m10-13.5v13.5M9.5 9.1v5.4m5-5.4v5.4M2.75 12.75Q5 10 7 6.75q5 6.25 10 0q2 3.25 4.25 6");
}
</style><g class="hntgybcog"><rect class="l9c52dskd"/><path class="rytaitbxx"/></g>`,
		"fallback": "iconoven:suspension-bridge",
	});
}

export default Component;
