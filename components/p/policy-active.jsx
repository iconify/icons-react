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
		"content": `<style>.c__8zrb-l {
  d: path("M14.278 21.5H5v-19h8.5L19 8v5.822");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yhk3zcbmd {
  d: path("M13.5 2.5V8H19M8.5 12h7m-7 4h3m3.25 2l2 2L21 15.75");
}
</style><g class="hntgybcog"><path class="c__8zrb-l"/><path class="yhk3zcbmd"/></g>`,
		"fallback": "uix:policy-active",
	});
}

export default Component;
