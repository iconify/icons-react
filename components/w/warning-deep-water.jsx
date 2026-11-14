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
		"content": `<style>.gc-093b0l {
  d: path("m13.538 5.833l6.559 12.082a1.75 1.75 0 0 1-1.538 2.585H5.441a1.75 1.75 0 0 1-1.538-2.585l6.559-12.082a1.75 1.75 0 0 1 3.076 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tg6kllbvn {
  d: path("M9.5 12.75q1.25-1.25 2.5 0t2.5 0M7.5 17q1.5-1.25 3 0t3 0t3 0");
}
</style><g class="hntgybcog"><path class="gc-093b0l"/><path class="tg6kllbvn"/></g>`,
		"fallback": "uix:warning-deep-water",
	});
}

export default Component;
