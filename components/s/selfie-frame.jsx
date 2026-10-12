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
		"content": `<style>.g7ybzs4qi {
  d: path("M7 6h10a1 1 0 0 1 1 1v5.25a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lny-agb9p {
  d: path("M9.75 9.5a3.17 3.17 0 0 0 4.5 0M12 16.25v5");
}

.y3ad11b7v {
  width: 18.5px;
  height: 13.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="y3ad11b7v"/><path class="g7ybzs4qi"/><path class="lny-agb9p"/></g>`,
		"fallback": "iconoven:selfie-frame",
	});
}

export default Component;
