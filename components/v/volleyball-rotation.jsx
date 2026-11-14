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
		"content": `<style>.ar9w39b5c {
  d: path("M7.25 20.25a9.5 9.5 0 1 1 9.5 0m2.75.5l-2.75-.5l1-2.5");
}

.f0go6fb1t {
  d: path("M12 12q-2 2.75 0 5.5m0-5.5q-1.75-3.25-5.25-1.75M12 12q3.25 0 5-2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ja8_zg6om {
  d: path("M6.5 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}
</style><g class="hntgybcog"><path class="ar9w39b5c"/><path class="ja8_zg6om"/><path class="f0go6fb1t"/></g>`,
		"fallback": "uix:volleyball-rotation",
	});
}

export default Component;
