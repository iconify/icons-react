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
		"content": `<style>.zn-ysn3ua {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 14V4.5a1.5 1.5 0 0 1 3 0V14a3.5 3.5 0 1 1-3 0ZM10 8.5v7m4.5-10H17M14.5 9H17m-2.5 3.5H17M14.5 16H17");
}
</style><path class="zn-ysn3ua"/>`,
		"fallback": "uix-sharp:thermometer-mercury",
	});
}

export default Component;
