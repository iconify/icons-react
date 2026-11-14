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
		"content": `<style>.cghxrj44s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.525 18.354l2.829-2.829a1.5 1.5 0 0 1 2.121 0a1.5 1.5 0 0 1 0 2.121l-2.829 2.829a1.5 1.5 0 0 1-2.121 0a1.5 1.5 0 0 1 0-2.121M6.5 13.5l4 4m-2-2l9-9m3.25-1.25L17.5 6.5l1.25-3.25");
}
</style><path class="cghxrj44s"/>`,
		"fallback": "uix:shinai",
	});
}

export default Component;
