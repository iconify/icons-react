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
		"content": `<style>.aeihrcc1b {
  d: path("M6 16.5c0-3 3-2 3-4.5c0-1.5.75-2.25 1.5-2.5m2.5-2h4m-3 2.25h2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l6ze68cyb {
  d: path("M4.25 16.5h15.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 19.75 20H4.25a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75m5.25-9a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}
</style><g class="hntgybcog"><path class="l6ze68cyb"/><path class="aeihrcc1b"/></g>`,
		"fallback": "uix:shelf-wobbler",
	});
}

export default Component;
