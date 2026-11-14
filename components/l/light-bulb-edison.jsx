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
		"content": `<style>.b-c5l68al {
  d: path("M10.25 11.75V10.5a1.75 1.75 0 0 1 3.5 0v1.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x_rnd6boi {
  d: path("M9.25 16v-1C7 13.75 5.5 11.75 5.5 9.25a6.5 6.5 0 0 1 13 0c0 2.5-1.5 4.5-3.75 5.75v1Zm0 2.75h5.5M10.5 21.5h3");
}
</style><g class="hntgybcog"><path class="x_rnd6boi"/><path class="b-c5l68al"/></g>`,
		"fallback": "uix:light-bulb-edison",
	});
}

export default Component;
