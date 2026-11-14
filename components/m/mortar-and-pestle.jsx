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
		"content": `<style>.aua7xqfys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 11h16c0 4.5-3.5 8-8 8s-8-3.5-8-8Zm6-7.5L14 9");
}
</style><path class="aua7xqfys"/>`,
		"fallback": "uix-sharp:mortar-and-pestle",
	});
}

export default Component;
