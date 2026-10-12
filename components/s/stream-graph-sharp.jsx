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
		"content": `<style>.h1o9-b30j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.5c4.25 0 5-3.25 9.25-3.25S17 8 21.25 8v3.5C17 11.5 16 10 12 10s-5 .75-9.25.75Zm0 5.75C7 13.25 8 12.5 12 12.5s5 1.5 9.25 1.5v2C17 16 16.5 19.75 12 19.75S7 16.5 2.75 16.5Z");
}
</style><path class="h1o9-b30j"/>`,
		"fallback": "iconoven:stream-graph-sharp",
	});
}

export default Component;
