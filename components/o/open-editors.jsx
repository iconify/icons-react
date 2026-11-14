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
		"content": `<style>.a_a-w9bvo {
  d: path("M5.5 6H11l4.5 4.5V19a2.5 2.5 0 0 1-2.5 2.5H5.5A2.5 2.5 0 0 1 3 19V8.5A2.5 2.5 0 0 1 5.5 6M16 2.5V5a2 2 0 0 0 2 2h2.5");
}

.ddue91ytc {
  d: path("M11 6v2.5a2 2 0 0 0 2 2h2.5m-9.5 4h6M6 18h3.5");
}

.f9qelxbfr {
  d: path("M8 6V5a2.5 2.5 0 0 1 2.5-2.5H16L20.5 7v8.5A2.5 2.5 0 0 1 18 18h-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="f9qelxbfr"/><path class="a_a-w9bvo"/><path class="ddue91ytc"/></g>`,
		"fallback": "uix:open-editors",
	});
}

export default Component;
