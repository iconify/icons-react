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
		"content": `<style>.aw0dxlbmg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 7.25a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0ZM3.5 21.5c0-4.161 3.595-6.645 8.204-6.747M16.5 14.5l-.5 7m4-7l-.5 7m-5-4.75h7m-7 2.5h7");
}
</style><path class="aw0dxlbmg"/>`,
		"fallback": "uix-sharp:staff-count",
	});
}

export default Component;
