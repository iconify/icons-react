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
		"content": `<style>.hzikzsbxt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 5h12v9H6ZM4.5 5L12 2.5L19.5 5ZM6 8h12M6 11h12M8 14v7.5m8-7.5v7.5");
}
</style><path class="hzikzsbxt"/>`,
		"fallback": "uix-sharp:stevenson-screen",
	});
}

export default Component;
