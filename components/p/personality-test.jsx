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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uqef8q55j {
  d: path("M12 8c-2-2-5.5-1.5-5.5 1.75c0 2 2 2.75 3.5 2.75c-1.5 1-1.75 3.75.25 4c1 .25 1.5-1 1.75-2c.25 1 .75 2.25 1.75 2c2-.25 1.75-3 .25-4c1.5 0 3.5-.75 3.5-2.75C17.5 6.5 14 6 12 8");
}

.yd-ecgb4e {
  d: path("M6.5 3.5h11A3.5 3.5 0 0 1 21 7v10a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17V7a3.5 3.5 0 0 1 3.5-3.5");
}
</style><g class="hntgybcog"><path class="yd-ecgb4e"/><path class="uqef8q55j"/></g>`,
		"fallback": "uix:personality-test",
	});
}

export default Component;
