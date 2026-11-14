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
		"content": `<style>.f2dbndb8z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 17.5h10v4H7Zm2.5 0c-5.5-4.5-5-14 2-14c6 0 7.5 6.5 2.5 9C11 14 10 11 12.5 9");
}
</style><path class="f2dbndb8z"/>`,
		"fallback": "uix-sharp:sculpture-abstract",
	});
}

export default Component;
