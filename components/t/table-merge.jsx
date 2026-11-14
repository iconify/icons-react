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
		"content": `<style>.h2i0s9bav {
  d: path("M5.5 15H10m-2-2l2 2l-2 2m10.5-2H14m2-2l-2 2l2 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.piubbfbxx {
  d: path("M6 3.5h12A3.5 3.5 0 0 1 21.5 7v10a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 17V7A3.5 3.5 0 0 1 6 3.5M2.5 9h19M12 3.5V9");
}
</style><g class="hntgybcog"><path class="piubbfbxx"/><path class="h2i0s9bav"/></g>`,
		"fallback": "uix:table-merge",
	});
}

export default Component;
