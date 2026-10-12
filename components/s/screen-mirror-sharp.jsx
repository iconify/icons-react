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
		"content": `<style>.fup5p561h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 2.75h11.5v8.5H9.75zm-7 9.5h6.5v9h-6.5zm9.5 6.25H16v-4.25m-2 2l2-2l2 2");
}
</style><path class="fup5p561h"/>`,
		"fallback": "iconoven:screen-mirror-sharp",
	});
}

export default Component;
