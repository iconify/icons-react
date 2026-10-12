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
		"content": `<style>.f15a5-boe {
  d: path("M6.5 2.75h12.25v18.5l-1.02-.72l-4.71-3.31L12 16.5l-1.02.72l-4.71 3.31l-1.02.72V2.75z");
}

.mtelvrbtc {
  d: path("M12 13c-1.75-1.75-3-3-3-4.75a3 3 0 0 1 6 0c0 1.75-1.25 3-3 4.75Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="f15a5-boe"/><path class="mtelvrbtc"/></g>`,
		"fallback": "iconoven:saved-places-sharp",
	});
}

export default Component;
