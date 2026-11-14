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

.j73h5bt6s {
  d: path("M4.5 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m9.5-2a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.ozdjujb5g {
  d: path("M9.5 17.5v-12l9.5-2v12M9.5 9L19 7");
}
</style><g class="hntgybcog"><path class="j73h5bt6s"/><path class="ozdjujb5g"/></g>`,
		"fallback": "uix:radio-jingle",
	});
}

export default Component;
