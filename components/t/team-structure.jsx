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
		"content": `<style>.zc84tmbnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-.75 6c0-2 1.25-3 2.75-3s2.75 1 2.75 3ZM3 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-.75 6c0-2 1.25-3 2.75-3s2.75 1 2.75 3ZM17 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-.75 6c0-2 1.25-3 2.75-3s2.75 1 2.75 3Zm-6.5-8.5L7 12.75m7.25-1.25L17 12.75M9.75 18.5h4.5");
}
</style><path class="zc84tmbnc"/>`,
		"fallback": "uix-sharp:team-structure",
	});
}

export default Component;
