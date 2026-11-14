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
		"content": `<style>.jn06kac3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5c0-3.5 2.75-6 6-6s5.75 2.5 5.75 6Zm14.5 1v-18m0 0c1.5-1 3 1 4.5 0V10c-1.5 1-3-1-4.5 0M5 7.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}
</style><path class="jn06kac3s"/>`,
		"fallback": "uix-sharp:race-marshal",
	});
}

export default Component;
