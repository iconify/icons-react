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

.ssq-b4r1c {
  d: path("M2.5 12a9.5 3.25 0 1 0 19 0a9.5 3.25 0 1 0-19 0");
}

.w2k9-ubcr {
  d: path("m12.75 7l.599 2.795a1.5 1.5 0 0 0 .796 1.027l.855.428a.839.839 0 0 1 0 1.5l-.855.428a1.5 1.5 0 0 0-.796 1.027L12.75 17a.767.767 0 0 1-1.5 0l-.599-2.795a1.5 1.5 0 0 0-.796-1.027L9 12.75a.839.839 0 0 1 0-1.5l.855-.428a1.5 1.5 0 0 0 .796-1.027L11.25 7a.767.767 0 0 1 1.5 0");
}
</style><g class="hntgybcog"><path class="w2k9-ubcr"/><path class="ssq-b4r1c"/></g>`,
		"fallback": "uix:protostar",
	});
}

export default Component;
