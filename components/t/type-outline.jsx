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
		"content": `<style>.g72qslbfe {
  d: path("m10.855 11.358l.27-.733a.932.932 0 0 1 1.75 0l.27.733A1.22 1.22 0 0 1 12 13a1.22 1.22 0 0 1-1.145-1.642");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wodz3xbms {
  d: path("m3.5 20.5l6.5-17h4l6.5 17h-4l-1.5-4H9l-1.5 4Z");
}
</style><g class="hntgybcog"><path class="wodz3xbms"/><path class="g72qslbfe"/></g>`,
		"fallback": "uix:type-outline",
	});
}

export default Component;
