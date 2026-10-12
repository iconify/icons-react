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
		"content": `<style>.he1evqb6c {
  d: path("M8.75 6.82a7 7 0 1 0 7.93 7.93");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u-gkr4b6f {
  d: path("M12 11.5V2.75a8.75 8.75 0 0 1 8.75 8.75Z");
}
</style><g class="hntgybcog"><path class="u-gkr4b6f"/><path class="he1evqb6c"/></g>`,
		"fallback": "iconoven:pie-slice",
	});
}

export default Component;
