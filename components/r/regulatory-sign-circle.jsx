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
		"content": `<style>.c24r3mbou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10a8 8 0 1 0 16 0a8 8 0 1 0-16 0Zm8 8v4M6.25 4.25l11.5 11.5");
}
</style><path class="c24r3mbou"/>`,
		"fallback": "uix-sharp:regulatory-sign-circle",
	});
}

export default Component;
