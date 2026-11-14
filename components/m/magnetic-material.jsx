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
		"content": `<style>.ei5ee3bny {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3v9a7 7 0 0 0 14 0V3h-4v9a3 3 0 0 1-6 0V3Zm0 4h4m6 0h4");
}
</style><path class="ei5ee3bny"/>`,
		"fallback": "uix-sharp:magnetic-material",
	});
}

export default Component;
