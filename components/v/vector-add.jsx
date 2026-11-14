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
		"content": `<style>.edopx84uv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 18L20 4m-3.5-.25L20 4l-.25 3.5M4 18h16m-3-3l3 3l-3 3m3-3V4");
}
</style><path class="edopx84uv"/>`,
		"fallback": "uix:vector-add",
	});
}

export default Component;
