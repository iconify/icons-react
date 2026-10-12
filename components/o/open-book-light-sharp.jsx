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
		"content": `<style>.px-8h67pe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 6.25l-2.222-2H2.75v14h7.028l2.222 2Zm0 0l2.222-2h7.028v14h-7.028l-2.222 2Z");
}
</style><path class="px-8h67pe"/>`,
		"fallback": "iconoven:open-book-light-sharp",
	});
}

export default Component;
