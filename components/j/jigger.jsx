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
		"content": `<style>.gl-0yjbdc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5h11l-4 8.5l2 10h-7l2-10ZM9.75 11h4.5m-6-4.5h7.5");
}
</style><path class="gl-0yjbdc"/>`,
		"fallback": "uix-sharp:jigger",
	});
}

export default Component;
