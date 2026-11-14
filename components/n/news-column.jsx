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

.pwkp65gco {
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5v11A3.5 3.5 0 0 1 18 21H6a3.5 3.5 0 0 1-3.5-3.5v-11A3.5 3.5 0 0 1 6 3");
}

.utev2cpyp {
  d: path("M7.25 6h2.5a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 9.75 12h-2.5a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 7.25 6m7.25.5h4m-4 4h4m-13 5h13");
}
</style><g class="hntgybcog"><path class="pwkp65gco"/><path class="utev2cpyp"/></g>`,
		"fallback": "uix:news-column",
	});
}

export default Component;
