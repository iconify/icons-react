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
		"content": `<style>.c_0hk3fao {
  d: path("M5.5 8a6.5 2 0 1 0 13 0a6.5 2 0 1 0-13 0");
}

.e2h5sfmdq {
  d: path("M5.5 13.5a6.5 2 0 0 0 13 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mcoaarhzv {
  d: path("M5.5 8v11.5a6.5 2 0 0 0 13 0V8M7 6.75A2.75 2.75 0 0 1 12 6a2.75 2.75 0 0 1 5 .75");
}
</style><g class="hntgybcog"><path class="c_0hk3fao"/><path class="mcoaarhzv"/><path class="e2h5sfmdq"/></g>`,
		"fallback": "uix:tennis-ball-can",
	});
}

export default Component;
