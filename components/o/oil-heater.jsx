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
		"content": `<style>.dqkibs7nj {
  d: path("M5.75 19.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m9 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xmco1jbwz {
  d: path("M8 2.5h8A3.5 3.5 0 0 1 19.5 6v8.5A3.5 3.5 0 0 1 16 18H8a3.5 3.5 0 0 1-3.5-3.5V6A3.5 3.5 0 0 1 8 2.5m1.5 3V15m5-9.5V15");
}
</style><g class="hntgybcog"><path class="xmco1jbwz"/><path class="dqkibs7nj"/></g>`,
		"fallback": "uix:oil-heater",
	});
}

export default Component;
