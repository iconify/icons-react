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
		"content": `<style>.bj9nkwebp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3v15.5M20 3v15.5M4 4.5h16V9H4Zm-1.5 17h19");
}
</style><path class="bj9nkwebp"/>`,
		"fallback": "uix-sharp:ski-finish-arch",
	});
}

export default Component;
