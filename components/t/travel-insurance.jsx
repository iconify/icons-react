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
		"content": `<style>.cg4z5cb_c {
  d: path("m12 2.75l7.5 2.75v6c0 4.75-3.25 8.25-7.5 9.75c-4.25-1.5-7.5-5-7.5-9.75v-6Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y5lp81mwq {
  d: path("M12 6.5V17m-4.75-3.75l4.75-3l4.75 3m-6.75 4L12 16l2 1.25");
}
</style><g class="hntgybcog"><path class="cg4z5cb_c"/><path class="y5lp81mwq"/></g>`,
		"fallback": "iconoven:travel-insurance",
	});
}

export default Component;
