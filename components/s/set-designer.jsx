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
		"content": `<style>.h3d5qybbp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.244 20.5H3.5v-10L12 3.25l8.5 7.25v1.056M15 21l.5-2.5l4-4l2 2l-4 4Z");
}
</style><path class="h3d5qybbp"/>`,
		"fallback": "uix-sharp:set-designer",
	});
}

export default Component;
