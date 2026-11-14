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
		"content": `<style>.a95ar_ibt {
  d: path("M6.25 9h11.5a1.75 1.75 0 0 1 1.75 1.75v8.75a1.75 1.75 0 0 1-1.75 1.75H6.25A1.75 1.75 0 0 1 4.5 19.5v-8.75A1.75 1.75 0 0 1 6.25 9M4.5 9l-2-5.5h7L12 9m7.5 0l2-5.5h-7L12 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ls2yoovyv {
  d: path("M10 13.75a2 2 0 1 1 2 2v.75m0 2.25h.01");
}
</style><g class="hntgybcog"><path class="a95ar_ibt"/><path class="ls2yoovyv"/></g>`,
		"fallback": "uix:lost-property-office",
	});
}

export default Component;
