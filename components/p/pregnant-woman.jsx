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

.pdvczgb_d {
  d: path("M12.75 14.25c1 .35 1.5 1.1 1.5 2");
}

.uc68r53bv {
  cx: 10.25px;
  cy: 4.5px;
  r: 1.75px;
}

.vu0qaj9-i {
  d: path("M7.75 21.25v-10.5a2 2 0 0 1 2-2H11a2 2 0 0 1 2 2v1c2.5.5 4 2.25 4 4.5S15.5 20 13 20.5v.75Z");
}
</style><g class="hntgybcog"><circle class="uc68r53bv"/><path class="vu0qaj9-i"/><path class="pdvczgb_d"/></g>`,
		"fallback": "iconoven:pregnant-woman",
	});
}

export default Component;
