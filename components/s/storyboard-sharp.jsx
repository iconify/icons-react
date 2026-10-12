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
		"content": `<style>.potwi7g9k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h7.5v5H3zm10.5 0H21v5h-7.5zM3 13h7.5v5H3zm10.5 0H21v5h-7.5zM3 21h4.5m6 0H18");
}
</style><path class="potwi7g9k"/>`,
		"fallback": "iconoven:storyboard-sharp",
	});
}

export default Component;
