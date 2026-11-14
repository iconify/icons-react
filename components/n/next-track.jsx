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
		"content": `<style>.liwo7_yei {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 6l7 6l-7 6Zm7.5 0l7 6l-7 6Zm10 0v12");
}
</style><path class="liwo7_yei"/>`,
		"fallback": "uix-sharp:next-track",
	});
}

export default Component;
