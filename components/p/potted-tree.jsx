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
		"content": `<style>.csaunsd0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 15.5h12l-.75 6H6.75Zm6-13L16.5 8H15l3 4.5H6L9 8H7.5Zm0 10v3");
}
</style><path class="csaunsd0p"/>`,
		"fallback": "uix-sharp:potted-tree",
	});
}

export default Component;
