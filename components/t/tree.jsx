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

.j8os-3bpc {
  d: path("M12 11.5v9.75m0-7L9.75 12m-2 9.25h8.5");
}

.jl4903ezj {
  cx: 12px;
  cy: 9.25px;
  r: 6.5px;
}
</style><g class="hntgybcog"><circle class="jl4903ezj"/><path class="j8os-3bpc"/></g>`,
		"fallback": "iconoven:tree",
	});
}

export default Component;
