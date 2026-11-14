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
		"content": `<style>.s21q82glx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 13a5 5 0 1 0 10 0a5 5 0 1 0-10 0Zm5 5v3.5m-3.5 0h7M12 2.25v3M6.5 7.5l-2-2m13 2l2-2");
}
</style><path class="s21q82glx"/>`,
		"fallback": "uix-sharp:reaction-light",
	});
}

export default Component;
