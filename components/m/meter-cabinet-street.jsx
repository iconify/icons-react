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

.leiaoeb5v {
  d: path("M6.75 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M14.5 7H17m-2.5 3H17");
}

.v_rw1ryin {
  d: path("M7.125 2.5h9.75A2.625 2.625 0 0 1 19.5 5.125v10.25A2.625 2.625 0 0 1 16.875 18h-9.75A2.625 2.625 0 0 1 4.5 15.375V5.125A2.625 2.625 0 0 1 7.125 2.5M8 18v3.5h8V18M12 2.5V18");
}
</style><g class="hntgybcog"><path class="v_rw1ryin"/><path class="leiaoeb5v"/></g>`,
		"fallback": "uix:meter-cabinet-street",
	});
}

export default Component;
