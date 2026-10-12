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
		"content": `<style>.fi7gjhb0y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.72 3.72l14.31 4.31l.72.22l-.72.22l-14.31 4.31L5 13V3.5zM5 8.25h7m-7 13V2.75m-2.25 18.5h4.5");
}
</style><path class="fi7gjhb0y"/>`,
		"fallback": "iconoven:ship-flag-sharp",
	});
}

export default Component;
