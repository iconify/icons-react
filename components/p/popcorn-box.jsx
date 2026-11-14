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
		"content": `<style>.hf5a8ebse {
  d: path("M5 9h14l-1.5 11.5h-11Zm4.5 0l.5 11.5M14.5 9L14 20.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hzgc7pygs {
  d: path("M14 6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.uui-kh2ql {
  d: path("M5 6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.zorunob7v {
  d: path("M9.5 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="hf5a8ebse"/><path class="uui-kh2ql"/><path class="zorunob7v"/><path class="hzgc7pygs"/></g>`,
		"fallback": "uix:popcorn-box",
	});
}

export default Component;
