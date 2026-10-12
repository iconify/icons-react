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

.lygk6dbzl {
  cx: 16.5px;
  cy: 7.5px;
  r: 3px;
}

.v_7knkbwn {
  d: path("M3.75 20.25L14.38 9.62");
}

.zvaizmb1y {
  d: path("M7 4q.3 2.2 2.5 2.5Q7.3 6.8 7 9q-.3-2.2-2.5-2.5Q6.7 6.2 7 4");
}
</style><g class="hntgybcog"><path class="v_7knkbwn"/><circle class="lygk6dbzl"/><path class="zvaizmb1y"/></g>`,
		"fallback": "iconoven:magic-staff",
	});
}

export default Component;
