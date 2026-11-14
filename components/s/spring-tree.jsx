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
		"content": `<style>.mr0e8pb9p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5v-15m0 8.5L6.5 9.5M12 12l5.5-5.5M3.75 8a1.25 2.25 0 1 0 2.5 0a1.25 2.25 0 1 0-2.5 0Zm14-3a1.25 2.25 0 1 0 2.5 0a1.25 2.25 0 1 0-2.5 0Zm-7-.75a1.25 2.25 0 1 0 2.5 0a1.25 2.25 0 1 0-2.5 0Z");
}
</style><path class="mr0e8pb9p"/>`,
		"fallback": "uix-sharp:spring-tree",
	});
}

export default Component;
