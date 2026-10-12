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
		"content": `<style>.be5dr1qwf {
  d: path("M18.5 11v10.25m0-4.5h1.75m-1.75 2.5H20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rknchmb5r {
  cx: 9.5px;
  cy: 7.75px;
  r: 3.75px;
}

.utdknkb8k {
  cx: 18.5px;
  cy: 8.5px;
  r: 2.5px;
}

.zqhf-kkhk {
  d: path("M4 20.25h9.5a.75.75 0 0 0 .75-.75c0-3-2.55-5.25-6-5.25s-5 2.25-5 5.25a.75.75 0 0 0 .75.75");
}
</style><g class="hntgybcog"><circle class="rknchmb5r"/><path class="zqhf-kkhk"/><circle class="utdknkb8k"/><path class="be5dr1qwf"/></g>`,
		"fallback": "iconoven:passkey",
	});
}

export default Component;
