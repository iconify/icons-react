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
		"content": `<style>.dsskuqc0o {
  fill: currentColor;
  d: path("M17.5 19.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdpatccng {
  d: path("M2 19.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m5 0h7.7m4.8-4.8V7M17 4.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="zdpatccng"/><path class="dsskuqc0o"/></g>`,
		"fallback": "uix:route-multi-stop",
	});
}

export default Component;
