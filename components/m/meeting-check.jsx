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
		"content": `<style>.uqwwkjzjt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 10.5a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Zm-2.645 2.24a7.25 7.25 0 0 1 0-4.48m13.898.364a7.25 7.25 0 0 1 0 3.752m-6.45 5.353q-.708.054-1.413-.03q-.705-.085-1.38-.304m.364-13.898a7.25 7.25 0 0 1 3.752 0M14.75 18l2 2L21 15.75");
}
</style><path class="uqwwkjzjt"/>`,
		"fallback": "uix-sharp:meeting-check",
	});
}

export default Component;
