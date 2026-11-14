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

.o7meh_seq {
  d: path("m13.29 3.907l3.75 4.091a1.75 1.75 0 0 1 .46 1.183V19.75a1.75 1.75 0 0 1-1.75 1.75h-7.5a1.75 1.75 0 0 1-1.75-1.75V9.181a1.75 1.75 0 0 1 .46-1.183l3.75-4.091a1.75 1.75 0 0 1 2.58 0");
}

.zg0jnebcj {
  d: path("M12 10.5za1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5m-1.5 11V18a1.5 1.5 0 0 1 3 0v3.5");
}
</style><g class="hntgybcog"><path class="o7meh_seq"/><path class="zg0jnebcj"/></g>`,
		"fallback": "uix:tower-house",
	});
}

export default Component;
