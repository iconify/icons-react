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
		"content": `<style>.f7r42znre {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v4kp1obkr {
  d: path("M8 6.75h1.25a1.5 1.5 0 0 1 1.4.97l4.85 9.53h1m-4.75-5.75L8 17.25");
}
</style><g class="hntgybcog"><rect class="f7r42znre"/><path class="v4kp1obkr"/></g>`,
		"fallback": "iconoven:lambda-symbol",
	});
}

export default Component;
