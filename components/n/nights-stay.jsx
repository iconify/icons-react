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

.jq6141byp {
  d: path("M13 3a9 9 0 1 0 8 11a7 7 0 0 1-8-11");
}

.rfgnpsq2i {
  d: path("m18.117 5.619l.016.036a1.5 1.5 0 0 0 1.253.911l.039.003a.399.399 0 0 1 .227.699l-.03.026a1.5 1.5 0 0 0-.478 1.473l.009.039a.399.399 0 0 1-.595.431l-.033-.02a1.5 1.5 0 0 0-1.55 0l-.033.02a.399.399 0 0 1-.595-.431l.009-.039a1.5 1.5 0 0 0-.478-1.473l-.03-.026a.399.399 0 0 1 .227-.699l.039-.003a1.5 1.5 0 0 0 1.253-.911l.016-.036a.399.399 0 0 1 .734 0");
}
</style><g class="hntgybcog"><path class="jq6141byp"/><path class="rfgnpsq2i"/></g>`,
		"fallback": "uix:nights-stay",
	});
}

export default Component;
