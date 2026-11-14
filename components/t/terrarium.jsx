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
		"content": `<style>.em609l11w {
  d: path("M6.875 5h10.25A4.375 4.375 0 0 1 21.5 9.375v5.25A4.375 4.375 0 0 1 17.125 19H6.875A4.375 4.375 0 0 1 2.5 14.625v-5.25A4.375 4.375 0 0 1 6.875 5M2.5 15.5h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xs8da9bkf {
  d: path("M12 15.5V11c0-2.25 1.75-3.25 4-3.25C16 10 14.25 11 12 11m0 2c-2.5 0-4-1.5-4-4c2.5 0 4 1.5 4 4");
}
</style><g class="hntgybcog"><path class="em609l11w"/><path class="xs8da9bkf"/></g>`,
		"fallback": "uix:terrarium",
	});
}

export default Component;
