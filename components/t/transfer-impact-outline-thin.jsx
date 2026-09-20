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
		"content": `<style>.dx3ubrb9h {
  d: path("M4 7.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2V19a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.h8v7oxwjv {
  d: path("m13 11 2.5 2.5L13 16");
}

.hbtmd5b0k {
  d: path("M9.5 7V2.5h5V7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y1d5_w6zd {
  d: path("M9 13.5h6.5");
}
</style><g class="hntgybcog"><path class="dx3ubrb9h"/><path class="hbtmd5b0k"/><path class="y1d5_w6zd"/><path class="h8v7oxwjv"/></g>`,
		"fallback": "iconmind:transfer-impact-outline-thin",
	});
}

export default Component;
