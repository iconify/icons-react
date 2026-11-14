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
		"content": `<style>.eu0hm9qmy {
  d: path("M7.5 2.5H16A3.5 3.5 0 0 1 19.5 6v12a3.5 3.5 0 0 1-3.5 3.5H7.5A3.5 3.5 0 0 1 4 18V6a3.5 3.5 0 0 1 3.5-3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.in6-2wbcq {
  d: path("M17.25 11h2.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75h-2.5a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 17.25 11M7.5 2.5v19m3-15q1.125-2.25 2.25 0t2.25 0");
}
</style><g class="hntgybcog"><path class="eu0hm9qmy"/><path class="in6-2wbcq"/></g>`,
		"fallback": "uix:journal-diary",
	});
}

export default Component;
