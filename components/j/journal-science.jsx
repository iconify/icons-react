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
		"content": `<style>.diuinu0fc {
  d: path("M5.125 5.5h5.25A2.625 2.625 0 0 1 13 8.125v7.75a2.625 2.625 0 0 1-2.625 2.625h-5.25A2.625 2.625 0 0 1 2.5 15.875v-7.75A2.625 2.625 0 0 1 5.125 5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t8d4evw3w {
  d: path("M5.5 5.5v-3h12V12m-12-3H10m6.75 6v2l-2 4.5h6.5l-2-4.5v-2M16 15h4");
}
</style><g class="hntgybcog"><path class="diuinu0fc"/><path class="t8d4evw3w"/></g>`,
		"fallback": "uix:journal-science",
	});
}

export default Component;
