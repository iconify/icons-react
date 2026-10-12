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
		"content": `<style>.eb5dckbye {
  d: path("M2.75 4.5h18.5M12 8v4.5m-2-2l2 2l2-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qmzyv5beb {
  width: 4.5px;
  height: 6px;
  x: 16.75px;
  y: 15px;
  rx: 1.5px;
}

.w58l85k5e {
  width: 4.5px;
  height: 6px;
  x: 9.75px;
  y: 15px;
  rx: 1.5px;
}

.yu39bw-ea {
  width: 4.5px;
  height: 6px;
  x: 2.75px;
  y: 15px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><path class="eb5dckbye"/><rect class="yu39bw-ea"/><rect class="w58l85k5e"/><rect class="qmzyv5beb"/></g>`,
		"fallback": "iconoven:tokenizer",
	});
}

export default Component;
