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
		"content": `<style>.l72noibxt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 15.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm7-3L20 3m-2.25 2.25l2 2M15 8l2 2m-2.25 8l2 2L21 15.75");
}
</style><path class="l72noibxt"/>`,
		"fallback": "uix-sharp:password-strong",
	});
}

export default Component;
