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
		"content": `<style>.ve3up5f-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5.5h2v6h15.75V14H2.75V5.5zm.75 8.5v7.25M19.75 14v7.25M8 18.25h8v2.5H8z");
}
</style><path class="ve3up5f-y"/>`,
		"fallback": "iconoven:pew-bench-sharp",
	});
}

export default Component;
