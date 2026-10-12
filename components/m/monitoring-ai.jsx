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
		"content": `<style>.d7lirwbtl {
  width: 18.5px;
  height: 13px;
  x: 2.75px;
  y: 3.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m-unrvbfc {
  d: path("M5.5 10.5h1.75l1.5-2.75l2.5 5.5l1.5-2.75h.75M17 7q.33 2.42 2.75 2.75q-2.42.33-2.75 2.75q-.33-2.42-2.75-2.75Q16.67 9.42 17 7m-5 9.75v4m-3.5 0h7");
}
</style><g class="hntgybcog"><rect class="d7lirwbtl"/><path class="m-unrvbfc"/></g>`,
		"fallback": "iconoven:monitoring-ai",
	});
}

export default Component;
