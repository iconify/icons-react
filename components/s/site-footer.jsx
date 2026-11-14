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
		"content": `<style>.d4yof8bkc {
  fill: currentColor;
  d: path("M4.5 17h15v2.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sqgzs9b2w {
  d: path("M8 2.5h8A3.5 3.5 0 0 1 19.5 6v12a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 18V6A3.5 3.5 0 0 1 8 2.5");
}

.x1-iybcbx {
  d: path("M8 7h8m-8 4h5");
}
</style><g class="hntgybcog"><path class="sqgzs9b2w"/><path class="d4yof8bkc"/><path class="x1-iybcbx"/></g>`,
		"fallback": "uix:site-footer",
	});
}

export default Component;
