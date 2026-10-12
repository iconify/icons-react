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
		"content": `<style>.hvznq8m3i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5L5.25 5L7.5 6.5L9.75 8L12 6.5L14.25 5l2.25 1.5L18.75 8L21 6.5M3 12l2.25-1.5L7.5 12l2.25 1.5L12 12m4.5 0l2.25-1.5L21 12M3 17.5L5.25 16l2.25 1.5m4.5 0l2.25-1.5l2.25 1.5l2.25 1.5L21 17.5");
}
</style><path class="hvznq8m3i"/>`,
		"fallback": "iconoven:mist-sharp",
	});
}

export default Component;
