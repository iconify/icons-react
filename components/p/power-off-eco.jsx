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
		"content": `<style>.et_xc3zja {
  d: path("M6.5 7.25a8 8 0 1 0 11 0M12 2.75v7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y6fd6lbzh {
  d: path("M9.25 17.25c.25-2.8 1.65-4 5.5-4c-.25 2.8-1.65 4-5.5 4");
}
</style><g class="hntgybcog"><path class="et_xc3zja"/><path class="y6fd6lbzh"/></g>`,
		"fallback": "iconoven:power-off-eco",
	});
}

export default Component;
