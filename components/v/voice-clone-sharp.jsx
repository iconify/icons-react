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
		"content": `<style>.pot-w5b4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.75 2.85l-2.003.568L6.75 5.5V10l-.003 2.082l2.003.568m3-9.9h5.5v10h-5.5zm2.75 10v8m-3 0h6M20.25 5.5L21.5 8l-1.25 2.5");
}
</style><path class="pot-w5b4o"/>`,
		"fallback": "iconoven:voice-clone-sharp",
	});
}

export default Component;
