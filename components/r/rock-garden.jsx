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
		"content": `<style>.fwbauwbme {
  d: path("M6.5 11.5a5.5 2.5 0 1 0 11 0a5.5 2.5 0 1 0-11 0");
}

.h8rcv7zsu {
  d: path("M4 17a8 3 0 1 0 16 0a8 3 0 1 0-16 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i7doc9bbg {
  d: path("M8.25 6.75a3.75 2.25 0 1 0 7.5 0a3.75 2.25 0 1 0-7.5 0");
}
</style><g class="hntgybcog"><path class="h8rcv7zsu"/><path class="fwbauwbme"/><path class="i7doc9bbg"/></g>`,
		"fallback": "uix:rock-garden",
	});
}

export default Component;
