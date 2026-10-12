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
		"content": `<style>.on_s14bcq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 2.75h7.5v18.5h-7.5zM12 5.25v2.5m0 3v2.5m0 3v2.5m-9.25-10H6.5m11 0h3.75m-18.5 6.5H6.5m11 0h3.75");
}
</style><path class="on_s14bcq"/>`,
		"fallback": "iconoven:overpass-sharp",
	});
}

export default Component;
