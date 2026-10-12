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
		"content": `<style>.cz5-ttb5g {
  d: path("M13.75 11.25a3.5 3.5 0 1 1-7 0a3.5 3.5 0 1 1 7 0m4 3h3.5v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xhp3s_b6r {
  width: 15px;
  height: 15px;
  x: 2.75px;
  y: 3.75px;
  rx: 3.5px;
}
</style><g class="hntgybcog"><rect class="xhp3s_b6r"/><path class="cz5-ttb5g"/></g>`,
		"fallback": "iconoven:tape-measure",
	});
}

export default Component;
