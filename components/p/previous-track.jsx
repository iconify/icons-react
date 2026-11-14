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
		"content": `<style>.w098-hnhq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m21 6l-7 6l7 6Zm-7.5 0l-7 6l7 6Zm-10 0v12");
}
</style><path class="w098-hnhq"/>`,
		"fallback": "uix-sharp:previous-track",
	});
}

export default Component;
