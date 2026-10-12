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

.ke_4cxbzd {
  d: path("M2.75 20.5h7.5m3.5 0h7.5");
}

.l3tmkcfwm {
  d: path("M2.75 10.5c2.5-4 5.75-6 9.25-6s6.75 2 9.25 6c-2.5 4-5.75 6-9.25 6s-6.75-2-9.25-6");
}

.odfkfz5qm {
  cx: 12px;
  cy: 10.5px;
  r: 2.5px;
}
</style><g class="hntgybcog"><path class="l3tmkcfwm"/><circle class="odfkfz5qm"/><path class="ke_4cxbzd"/></g>`,
		"fallback": "iconoven:visibility",
	});
}

export default Component;
