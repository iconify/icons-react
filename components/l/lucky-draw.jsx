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
		"content": `<style>.ffebi6b3t {
  d: path("M4.5 5h15a2 2 0 0 1 2 2v2.5a2.5 2.5 0 0 0 0 5V17a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-2.5a2.5 2.5 0 0 0 0-5V7a2 2 0 0 1 2-2");
}

.gvglj5b-m {
  d: path("m12.625 9.125l.261.574a1.5 1.5 0 0 0 1.241.874l.623.052a.698.698 0 0 1 .436 1.189l-.585.585a1.5 1.5 0 0 0-.395 1.425l.169.676a.617.617 0 0 1-.929.67l-.641-.408a1.5 1.5 0 0 0-1.61 0l-.641.408a.617.617 0 0 1-.929-.67l.169-.676a1.5 1.5 0 0 0-.395-1.425l-.585-.585a.698.698 0 0 1 .436-1.189l.623-.052a1.5 1.5 0 0 0 1.241-.874l.261-.574a.687.687 0 0 1 1.25 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ffebi6b3t"/><path class="gvglj5b-m"/></g>`,
		"fallback": "uix:lucky-draw",
	});
}

export default Component;
