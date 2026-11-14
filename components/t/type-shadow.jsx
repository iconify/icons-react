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
		"content": `<style>.tr7vwpbag {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 20.5l.843-2.247m5.091-13.577L13.5 4.5l6 16M4 19.5l6-16l6 16m-10.5-4h9");
}
</style><path class="tr7vwpbag"/>`,
		"fallback": "uix:type-shadow",
	});
}

export default Component;
