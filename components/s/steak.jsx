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
		"content": `<style>.e1h4bcbho {
  d: path("M14.5 3.5c3.75 0 6.75 2.75 6.75 6.5c0 5.5-6.25 11.25-12.75 11.25c-3.5 0-5.75-1.5-5.75-4c0-2.75 2.75-3.5 4-5.5C8.5 9 10 3.5 14.5 3.5");
}

.gcnqgobmh {
  cx: 14.75px;
  cy: 9.75px;
  r: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nvzmv1bei {
  d: path("M5.75 17c1.5.5 3 .25 4.25-1");
}
</style><g class="hntgybcog"><path class="e1h4bcbho"/><circle class="gcnqgobmh"/><path class="nvzmv1bei"/></g>`,
		"fallback": "iconoven:steak",
	});
}

export default Component;
