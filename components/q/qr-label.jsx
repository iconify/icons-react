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
		"content": `<style>.aof_fdadh {
  d: path("M9 7h.5A1.5 1.5 0 0 1 11 8.5V9a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 9v-.5A1.5 1.5 0 0 1 9 7m5.5 0h.5a1.5 1.5 0 0 1 1.5 1.5V9a1.5 1.5 0 0 1-1.5 1.5h-.5A1.5 1.5 0 0 1 13 9v-.5A1.5 1.5 0 0 1 14.5 7M9 13h.5a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 15v-.5A1.5 1.5 0 0 1 9 13m6 2h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tg2ywbcft {
  d: path("M7.5 3.5h9A3.5 3.5 0 0 1 20 7v10a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 17V7a3.5 3.5 0 0 1 3.5-3.5");
}
</style><g class="hntgybcog"><path class="tg2ywbcft"/><path class="aof_fdadh"/></g>`,
		"fallback": "uix:qr-label",
	});
}

export default Component;
