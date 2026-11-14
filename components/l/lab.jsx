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

.oah35ysvx {
  d: path("M11 8v2.25l-2.5 3.5h7l-2.5-3.5V8m-2.75 12.5v-2a1.75 1.75 0 0 1 3.5 0v2");
}

.vd6tofbzt {
  d: path("m4.598 9.977l6.25-5.469a1.75 1.75 0 0 1 2.304 0l6.25 5.469A1.75 1.75 0 0 1 20 11.294v7.456a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 18.75v-7.456a1.75 1.75 0 0 1 .598-1.317M16 7V4h2v4.75");
}
</style><g class="hntgybcog"><path class="vd6tofbzt"/><path class="oah35ysvx"/></g>`,
		"fallback": "uix:lab",
	});
}

export default Component;
