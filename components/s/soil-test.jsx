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
		"content": `<style>.hbr_rd1-h {
  d: path("M9 9.5v8.75a3 3 0 0 0 6 0V9.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j80lry1wr {
  d: path("M9 16.5h6v1.75a3 3 0 0 1-6 0Zm0 0h6m-3 0v-11m0 1.75c-.25-2.25-1.75-3.75-4.25-4c0 2.5 1.75 4 4.25 4M12 6c.25-2.25 1.75-3.25 4.25-3.25C16.25 5 14.5 6 12 6");
}
</style><g class="hntgybcog"><path class="hbr_rd1-h"/><path class="j80lry1wr"/></g>`,
		"fallback": "iconoven:soil-test",
	});
}

export default Component;
