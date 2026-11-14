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
		"content": `<style>.gljqbp52z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3.5v7H6a3.5 3.5 0 0 1 0-7Zm0 0H13m-3.5 0v17m3.5-17v17m5.75-11.25v5.5M16 12h5.5");
}
</style><path class="gljqbp52z"/>`,
		"fallback": "uix-sharp:paragraph-add",
	});
}

export default Component;
