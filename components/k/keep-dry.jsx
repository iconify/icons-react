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
		"content": `<style>.jcy7fsb2t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 11a8 8 0 0 1 16 0Zm8 0v6.5a1.75 1.75 0 0 1-3.5 0");
}
</style><path class="jcy7fsb2t"/>`,
		"fallback": "uix-sharp:keep-dry",
	});
}

export default Component;
