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
		"content": `<style>.ck0d9--0v {
  d: path("M3 11.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q18uakb8l {
  d: path("M5.75 5.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M12 11.5h5.5a3.5 3.5 0 0 1 0 7H15v-3m-7.5-4h.01");
}
</style><g class="hntgybcog"><path class="ck0d9--0v"/><path class="q18uakb8l"/></g>`,
		"fallback": "uix:jig-head",
	});
}

export default Component;
