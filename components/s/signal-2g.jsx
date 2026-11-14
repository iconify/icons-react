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
		"content": `<style>.abqor2bpw {
  d: path("M14.75 8zA1.25 1.25 0 0 1 16 9.25v10a1.25 1.25 0 0 1-1.25 1.25a1.25 1.25 0 0 1-1.25-1.25v-10A1.25 1.25 0 0 1 14.75 8M20 3.5za1.25 1.25 0 0 1 1.25 1.25v14.5A1.25 1.25 0 0 1 20 20.5a1.25 1.25 0 0 1-1.25-1.25V4.75A1.25 1.25 0 0 1 20 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p45v4lbsj {
  fill: currentColor;
  d: path("M4.25 15.5za1.25 1.25 0 0 1 1.25 1.25v2.5a1.25 1.25 0 0 1-1.25 1.25A1.25 1.25 0 0 1 3 19.25v-2.5a1.25 1.25 0 0 1 1.25-1.25M9.5 12za1.25 1.25 0 0 1 1.25 1.25v6A1.25 1.25 0 0 1 9.5 20.5a1.25 1.25 0 0 1-1.25-1.25v-6A1.25 1.25 0 0 1 9.5 12");
}
</style><g class="hntgybcog"><path class="p45v4lbsj"/><path class="abqor2bpw"/></g>`,
		"fallback": "uix:signal-2g",
	});
}

export default Component;
