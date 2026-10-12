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
		"content": `<style>.r8h9q6bcl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h4v13H3zm7 0h4v18h-4zm7 0h4v8.5h-4z");
}
</style><path class="r8h9q6bcl"/>`,
		"fallback": "iconoven:kanban-sharp",
	});
}

export default Component;
