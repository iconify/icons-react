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
		"content": `<style>.f_rwecgsj {
  d: path("M12 5.5zA1.5 1.5 0 0 1 13.5 7v1.5A1.5 1.5 0 0 1 12 10a1.5 1.5 0 0 1-1.5-1.5V7A1.5 1.5 0 0 1 12 5.5m-5 7h10M7 15h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.horxzjbwi {
  d: path("M4.25 2.5h15.5a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 19.75 7H4.25A1.75 1.75 0 0 1 2.5 5.25v-1A1.75 1.75 0 0 1 4.25 2.5m1.25 6h13a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2H10l-3 2.75V18H5.5a2 2 0 0 1-2-2v-5.5a2 2 0 0 1 2-2");
}
</style><g class="hntgybcog"><path class="horxzjbwi"/><path class="f_rwecgsj"/></g>`,
		"fallback": "uix:shelf-talker",
	});
}

export default Component;
