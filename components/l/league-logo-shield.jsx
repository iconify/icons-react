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

.ouf3zpbji {
  d: path("m12.5 8.25l.159.396a1.5 1.5 0 0 0 1.257.937l.511.047a.569.569 0 0 1 .323.995l-.36.315a1.5 1.5 0 0 0-.488 1.397l.106.583a.574.574 0 0 1-.883.58l-.293-.195a1.5 1.5 0 0 0-1.664 0l-.293.195a.574.574 0 0 1-.883-.58l.106-.583a1.5 1.5 0 0 0-.488-1.397l-.36-.315a.569.569 0 0 1 .323-.995l.511-.047a1.5 1.5 0 0 0 1.257-.937l.159-.396a.539.539 0 0 1 1 0");
}

.xkc8ejbjp {
  d: path("M12 2.5L19.5 5v6c0 5-3.5 8.5-7.5 10.5c-4-2-7.5-5.5-7.5-10.5V5Z");
}
</style><g class="hntgybcog"><path class="xkc8ejbjp"/><path class="ouf3zpbji"/></g>`,
		"fallback": "uix:league-logo-shield",
	});
}

export default Component;
