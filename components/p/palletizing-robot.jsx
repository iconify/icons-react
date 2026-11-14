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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.txi5bepoz {
  d: path("m3.5 21l1-2.5H8L9 21Zm2.75-2.5V11l6.25-6.5l5 4.5");
}

.xufwgrb1y {
  d: path("M15 11.5V9h5v2.5m-4.25 0h3.5A1.75 1.75 0 0 1 21 13.25v1.5a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 14 14.75v-1.5a1.75 1.75 0 0 1 1.75-1.75m-2.75 8h8.5");
}
</style><g class="hntgybcog"><path class="txi5bepoz"/><path class="xufwgrb1y"/></g>`,
		"fallback": "uix:palletizing-robot",
	});
}

export default Component;
