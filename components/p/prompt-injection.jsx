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
		"content": `<style>.cdy3y8-dw {
  d: path("m6.25 13l2 2l-2 2m4.25 0h2m7.46-10.84l-2.42 2.42q-.35.35-.7 0l-1.42-1.42q-.35-.35 0-.7l2.42-2.42q.35-.35.7 0l1.42 1.42q.35.35 0 .7m-3.83 1.71L12 12m7.25-7.25l2-2");
}

.gszie9s4u {
  width: 13px;
  height: 12px;
  x: 2.75px;
  y: 9.25px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="gszie9s4u"/><path class="cdy3y8-dw"/></g>`,
		"fallback": "iconoven:prompt-injection",
	});
}

export default Component;
